import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { RiCoupon3Line } from 'react-icons/ri'
import { PiCaretCircleRight } from 'react-icons/pi'
import { BsCartX } from 'react-icons/bs'

import { api } from '../../services/api'
import { useCart } from '../../hooks/cart.useCart'
import { formatToPrice } from '../../utils/formatters'

import { Loading } from '../../components/Loading'
import { PageTitle } from '../../components/PageTitle'
import { ProductItem } from '../../components/ProductItem'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { PaymentCard } from '../../components/PaymentCard'
import { Empty } from '../../components/Empty'

import * as S from './styles'

export function Order() {
  const { cart, removeFromCart, clearCart } = useCart()

  const [isLoading, setIsLoading] = useState(false)
  const [order, setOrder] = useState(null)
  const [coupon, setCoupon] = useState(null)
  const [couponError, setCouponError] = useState(false)
  const [orderPrice, setOrderPrice] = useState(0)
  const [orderStep, setOrderStep] = useState('order')

  const hasOrderItems = order?.length > 0
  const couponRef = useRef()
  const navigate = useNavigate()

  function ShowDiscount() {
    return (
      <S.Discount>
        {`Promo ${coupon.name}: ${coupon.discount * 100}% de desconto`}
      </S.Discount>
    )
  }

  function ShowTotalPrice() {
    let total = orderPrice
    if (coupon?.discount) total = orderPrice - orderPrice * coupon.discount
    return `Total: ${formatToPrice(total)}`
  }

  function handleCoupon() {
    setCouponError(false)
    if (!couponRef.current.value) return

    if (couponRef.current.value === 'FOOD15') {
      return setCoupon({ name: 'FOOD15', discount: 0.15 })
    }

    setCouponError(true)
    return setCoupon(null)
  }

  function handleMobileStep(path) {
    return setOrderStep(path)
  }

  async function handleOrder() {
    const description = order
      .map(item => `${item.quantity} x ${item.name}`)
      .join(', ')

    return await api
      .post('/orders', { description }, { withCredentials: true })
      .then(() => {
        toast.success(`Seu pedido foi efetuado com sucesso.`)
        navigate('/pedidos')
        clearCart()
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    async function getOrder() {
      const cartItemsId = cart.map(product => product.id)

      if (cartItemsId.length) {
        setIsLoading(true)

        await api
          .get(`/products?id=${cartItemsId}`, { withCredentials: true })
          .then(response => {
            const fetchedItems = response.data

            const orderItems = fetchedItems.map(orderItem => {
              const itemToUpdate = cart.find(
                cartItem => cartItem.id === orderItem.id
              )
              return { ...orderItem, quantity: itemToUpdate.quantity }
            })
            setOrder(orderItems)

            const totalProductsPrice = orderItems
              .map(item => item.quantity * item.price)
              .reduce((subtotal, productPrice) => subtotal + productPrice, 0)
            setOrderPrice(totalProductsPrice)
          })
          .catch(error => console.error(error))
          .finally(() => setIsLoading(false))
      } else {
        setOrder(null)
      }
    }

    getOrder()
  }, [cart])

  if (isLoading) {
    return (
      <S.LoadingContainer>
        <Loading text="Carregando seu carrinho" />
      </S.LoadingContainer>
    )
  }

  return (
    <S.Container>
      <S.Order $step={orderStep}>
        <S.Header>
          <PageTitle>Meu pedido</PageTitle>
        </S.Header>

        {hasOrderItems && (
          <S.OrderContent>
            <S.OrderList>
              {order.map(product => (
                <ProductItem.Root key={product.id} product={product}>
                  <ProductItem.Title showQuantity />
                  <ProductItem.Price />
                  <ProductItem.Button
                    text="Excluir"
                    onClick={() => removeFromCart(product)}
                  />
                </ProductItem.Root>
              ))}
            </S.OrderList>

            <S.Coupon>
              <Input.Root>
                <Input.Label text="Cupom" htmlFor="coupon" />
                <Input.Content
                  ref={couponRef}
                  id="coupon"
                  type="text"
                  icon={RiCoupon3Line}
                  onKeyDown={key => key.code === 'Enter' && handleCoupon()}
                  placeholder="Insira seu cupom de desconto"
                  error={couponError && 'Cupom inválido'}
                >
                  <Input.Button
                    icon={PiCaretCircleRight}
                    onClick={handleCoupon}
                  />
                </Input.Content>
              </Input.Root>
            </S.Coupon>

            <S.OrderPrice>
              {coupon && (
                <>
                  <S.Subtotal>Subtotal: {formatToPrice(orderPrice)}</S.Subtotal>
                  <ShowDiscount />
                </>
              )}
              <ShowTotalPrice />
            </S.OrderPrice>
            <S.OrderAction $step={orderStep}>
              <Button
                text="Avançar"
                onClick={() => handleMobileStep('payment')}
              />
            </S.OrderAction>
          </S.OrderContent>
        )}

        {!hasOrderItems && (
          <Empty.Root>
            <Empty.Icon icon={BsCartX} />
            <Empty.Content>
              <Empty.Title text="Seu carrinho está vazio" />
              <Empty.Message>
                Selecione itens do nosso delicioso menu{' '}
                {<Link to="/">clicando aqui</Link>}.
              </Empty.Message>
            </Empty.Content>
          </Empty.Root>
        )}
      </S.Order>

      {hasOrderItems && (
        <S.Payment $step={orderStep}>
          <S.Header>
            <PageTitle>Pagamento</PageTitle>
          </S.Header>
          <PaymentCard onPaymentConfirm={handleOrder} />
          <S.OrderAction $step={orderStep}>
            <Button
              text="Voltar"
              variant="secondary"
              onClick={() => handleMobileStep('order')}
            />
          </S.OrderAction>
        </S.Payment>
      )}
    </S.Container>
  )
}
