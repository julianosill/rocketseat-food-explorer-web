import { useEffect, useState } from 'react'

import { useAuth } from '../../hooks/auth.useAuth'
import { api } from '../../services/api'
import { formatOrderId, formatDate } from '../../utils/formatters'

import { PageTitle } from '../../components/PageTitle'
import { Input } from '../../components/Input'
import * as S from './styles'

export function OrderHistory() {
  const { isAdmin } = useAuth()

  const [orders, setOrders] = useState(null)

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
    const orderToUpdate = { id: orderId, status }
    await api
      .put('/orders', orderToUpdate, { withCredentials: true })
      .then(fetchOrders)
      .catch(error => console.error(error))
  }

  async function fetchOrders() {
    await api
      .get('/orders', { withCredentials: true })
      .then(response => {
        const { data } = response
        setOrders(data)
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    fetchOrders()
  }, [])

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
      <S.Table $admin={isAdmin}>
        <S.TableHeader>
          <S.TableHead data-cell="status">Status</S.TableHead>
          <S.TableHead data-cell="id">Código</S.TableHead>
          <S.TableHead data-cell="description">Detalhamento</S.TableHead>
          <S.TableHead data-cell="date">Data e hora</S.TableHead>
        </S.TableHeader>
        {orders &&
          orders.map(order => {
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
    </>
  )
}
