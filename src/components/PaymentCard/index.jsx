import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import { MdOutlinePix } from 'react-icons/md'
import { PiCreditCard } from 'react-icons/pi'
import { PiReceipt, PiClock, PiCheckCircle, PiForkKnife } from 'react-icons/pi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import qrcode from '../../assets/qrcode.svg'
import { Input } from '../Input'
import { Button } from '../Button'
import * as S from './styles'

export function PaymentCard({ onPaymentConfirm }) {
  const [status, setStatus] = useState('pix')
  const [error, setError] = useState(null)
  const [loadingPayment, setLoadingPayment] = useState(false)

  const numberRef = useRef()
  const expireRef = useRef()
  const cvcRef = useRef()

  function handleMethod(type) {
    if (type === 'pix') return setStatus('pix')
    if (type === 'card') return setStatus('card')
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError(null)

    if (!numberRef.current.value) {
      numberRef.current.focus()
      return setError({ number: 'Informe o número do cartão' })
    }
    if (!expireRef.current.value) {
      expireRef.current.focus()
      return setError({ expire: 'Informe a validade' })
    }
    if (!cvcRef.current.value) {
      cvcRef.current.focus()
      return setError({ cvc: 'Informe o CVC' })
    }

    setLoadingPayment(true)

    setTimeout(() => {
      setStatus('paid')
      setLoadingPayment(false)

      onPaymentConfirm()
    }, 2000)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Tab onClick={() => handleMethod('pix')} $active={status === 'pix'}>
          <MdOutlinePix /> PIX
        </S.Tab>
        <S.Tab onClick={() => handleMethod('card')} $active={status === 'card'}>
          <PiCreditCard /> Crédito
        </S.Tab>
      </S.Header>

      <S.Content>
        {status === 'pix' && <S.QRcode src={qrcode} />}
        {status === 'card' && (
          <S.Form onSubmit={handleSubmit}>
            <Input.Root>
              <Input.Label text="Número do Cartão" htmlFor="number" />
              <Input.Content
                ref={numberRef}
                variant="outline"
                id="number"
                type="text"
                placeholder="0000 0000 0000 0000"
                error={error?.number}
              />
            </Input.Root>

            <S.FormRow>
              <Input.Root>
                <Input.Label text="Validade" htmlFor="expire" />
                <Input.Content
                  ref={expireRef}
                  variant="outline"
                  id="expire"
                  type="text"
                  placeholder="04/25"
                  error={error?.expire}
                />
              </Input.Root>

              <Input.Root>
                <Input.Label text="CVC" htmlFor="cvc" />
                <Input.Content
                  ref={cvcRef}
                  variant="outline"
                  id="cvc"
                  type="text"
                  placeholder="000"
                  error={error?.cvc}
                />
              </Input.Root>
            </S.FormRow>

            <S.FormAction $loading={loadingPayment}>
              <Button
                icon={loadingPayment ? AiOutlineLoading3Quarters : PiReceipt}
                text={
                  loadingPayment
                    ? 'Processando pagamento...'
                    : 'Finalizar pagamento'
                }
                loading={loadingPayment}
                disabled={loadingPayment}
              />
            </S.FormAction>
          </S.Form>
        )}
        {status === 'waiting' && (
          <S.Status>
            <PiClock />
            <p>Aguardando pagamento no caixa</p>
          </S.Status>
        )}
        {status === 'paid' && (
          <S.Status>
            <PiCheckCircle />
            <p>Pagamento aprovado!</p>
          </S.Status>
        )}
        {status === 'delivered' && (
          <S.Status>
            <PiForkKnife />
            <p>Pedido entregue!</p>
          </S.Status>
        )}
      </S.Content>
    </S.Container>
  )
}

PaymentCard.propTypes = {
  onPaymentConfirm: PropTypes.func.isRequired,
}
