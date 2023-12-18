import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { CiViewList } from 'react-icons/ci'

import { useAuth } from '../../hooks/auth.useAuth'
import { api } from '../../services/api'
import { handleFailedMessage } from '../../utils/handlers'
import { formatOrderId, formatDate } from '../../utils/formatters'

import { Loading } from '../../components/Loading'
import { PageTitle } from '../../components/PageTitle'
import { Input } from '../../components/Input'
import { Empty } from '../../components/Empty'
import * as S from './styles'

export function OrderHistory() {
  const { isAdmin } = useAuth()

  const [isLoading, setIsLoading] = useState(false)
  const [orders, setOrders] = useState(null)
  const [error, setError] = useState(null)

  function statusName(status) {
    switch (status) {
      case 'pending':
        return 'Pendente'
      case 'progress':
        return 'Preparando'
      case 'delivered':
        return 'Entregue'
      default:
        return 'Pendente'
    }
  }

  async function handleStatusChange(orderId, status) {
    await api
      .put(`/orders/${orderId}`, { status }, { withCredentials: true })
      .then(() => {
        fetchOrders()
        toast.success(`Pedido ${orderId} foi atualizado com sucesso.`)
      })
      .catch(error => console.error(error))
  }

  async function fetchOrders() {
    setIsLoading(true)
    await api
      .get('/orders', { withCredentials: true })
      .then(response => {
        const { data } = response
        setOrders(data)
      })
      .catch(error => {
        let errorMessage
        if (error.response) {
          errorMessage = error.response.data.message || null
        }
        setError(handleFailedMessage('order', errorMessage))
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  if (isLoading) {
    return (
      <S.LoadingContainer>
        <Loading text="Carregando o histórico de pedidos" />
      </S.LoadingContainer>
    )
  }

  return (
    <>
      <S.Header>
        <PageTitle>
          {!isAdmin && (
            <>
              <span className="mobile-hide">Histórico de pedidos</span>
              <span className="mobile-only">Pedidos</span>
            </>
          )}
          {isAdmin && <span>Pedidos</span>}
        </PageTitle>
      </S.Header>

      {orders && (
        <S.Table $admin={isAdmin}>
          <S.TableHeader>
            <S.TableHead data-cell="status">Status</S.TableHead>
            <S.TableHead data-cell="id">Código</S.TableHead>
            <S.TableHead data-cell="description">Detalhamento</S.TableHead>
            <S.TableHead data-cell="date">Data e hora</S.TableHead>
          </S.TableHeader>

          {orders.map(order => {
            return (
              <S.TableRow key={order.id}>
                <S.TableCell data-cell="status">
                  {isAdmin ? (
                    <Input.Root>
                      <Input.Select
                        status={order.status}
                        statusIcon
                        size="small"
                        value={order.status}
                        onChange={e =>
                          handleStatusChange(order.id, e.target.value)
                        }
                      >
                        <option value="pending">Pendente</option>
                        <option value="progress">Preparando</option>
                        <option value="delivered">Entregue</option>
                      </Input.Select>
                    </Input.Root>
                  ) : (
                    <>
                      <S.StatusIcon $status={order.status} />
                      {statusName(order.status)}
                    </>
                  )}
                </S.TableCell>
                <S.TableCell data-cell="id">
                  {formatOrderId(order.id)}
                </S.TableCell>
                <S.TableCell data-cell="description">
                  {order.description}
                </S.TableCell>
                <S.TableCell data-cell="date">
                  {formatDate(order.created_at)}
                </S.TableCell>
              </S.TableRow>
            )
          })}
        </S.Table>
      )}

      {!orders && (
        <Empty.Root>
          <Empty.Icon icon={CiViewList} />
          <Empty.Content>
            <Empty.Title text={error} />
          </Empty.Content>
        </Empty.Root>
      )}
    </>
  )
}
