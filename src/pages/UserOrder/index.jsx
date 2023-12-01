import { useEffect, useState } from 'react'

import { RiCoupon3Line } from 'react-icons/ri'
import { BsCartX } from 'react-icons/bs'

import { useCart } from '../../hooks/cart.useCart'
import { api, imageUrl } from '../../services/api'
import { formatToPrice } from '../../utils/formatters'

import { Loading } from '../../components/Loading'
import { PageTitle } from '../../components/PageTitle'
import { Input } from '../../components/Input'
import * as S from './styles'
import { Link } from 'react-router-dom'

export function UserOrder() {
  const { cart, removeFromCart } = useCart()
  const [order, setOrder] = useState(null)
  const [orderPrice, setOrderPrice] = useState(0)
  const [coupon, setCoupon] = useState('')

  useEffect(() => {
    async function getOrder() {
      const cartItemsId = cart.map(product => product.id)
      if (cartItemsId.length) {
        await api
          .get(`/products?id=${cartItemsId}`)
          .then(response => {
            const fetchedItems = response.data

            const orderItems = fetchedItems.map(orderItem => {
              const itemToUpdate = cart.find(
                cartItem => cartItem.id === orderItem.id
              )
              if (itemToUpdate) {
                return { ...orderItem, quantity: itemToUpdate.quantity }
              }
              return orderItem
            })

            setOrder(orderItems)

            const totalProductsPrice = orderItems
              .map(item => item.quantity * item.price)
              .reduce((subtotal, productPrice) => subtotal + productPrice, 0)

            setOrderPrice(totalProductsPrice)
          })
          .catch(error => {
            console.error(error)
          })
      }
    }
    getOrder()
  }, [cart])

  if (cart.length === 0) {
    return (
      <S.Container>
        <S.Order>
          <S.Header>
            <PageTitle text="Meu pedido" />
          </S.Header>
          <S.Empty>
            <BsCartX />
            <S.EmptyMessage>
              Seu carrinho está vazio.
              <p>
                Adicione itens deliciosos do nosso menu{' '}
                {<Link to="/">clicando aqui</Link>}.
              </p>
            </S.EmptyMessage>
          </S.Empty>
        </S.Order>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Order>
        <S.Header>
          <PageTitle text="Meu pedido" />
        </S.Header>
        <S.List>
          {order?.map(product => (
            <S.Item key={product.id}>
              <img src={`${imageUrl}/${product.image}`} alt={product.name} />
              <S.ItemContent>
                <S.ItemName>
                  {product.quantity}
                  <span>x</span>
                  {product.name}
                </S.ItemName>
                <S.ItemPrice>
                  <strong>Preço: </strong> {formatToPrice(product.price)}
                  {product.quantity > 1 && (
                    <>
                      <S.ItemPriceDivider>|</S.ItemPriceDivider>
                      <strong>Subtotal: </strong>
                      {formatToPrice(product.quantity * product.price)}
                    </>
                  )}
                </S.ItemPrice>
                <button onClick={() => removeFromCart(product)}>Excluir</button>
              </S.ItemContent>
            </S.Item>
          ))}

          <S.Coupon>
            <Input
              id="coupon"
              icon={RiCoupon3Line}
              type="text"
              label="Cupom"
              value={coupon}
              onChange={e => setCoupon(e.target.value)}
              placeholder="Insira seu cupom de desconto"
            />
          </S.Coupon>

          <S.OrderPrice>
            {coupon === 'FOOD15' ? (
              <>
                <S.Subtotal>Subtotal: {formatToPrice(orderPrice)}</S.Subtotal>
                <S.Discount>{`Cupom ${coupon}: 15% de desconto`}</S.Discount>
                Total: {formatToPrice(orderPrice - orderPrice * 0.15)}
              </>
            ) : (
              <>Total: {formatToPrice(orderPrice)}</>
            )}
          </S.OrderPrice>
        </S.List>
      </S.Order>

      <S.Payment>
        <S.Header>
          <PageTitle text="Pagamento" />
        </S.Header>
      </S.Payment>
    </S.Container>
  )
}
