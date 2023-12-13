export function formatToPrice(amount) {
  if (!amount) return null

  const price = amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return price
}

export function formatToNumber(amount) {
  if (!amount) return null
  const [, price] = amount.split('R$')
  const number = parseFloat(price.replace(/\./g, '').replace(',', '.'))
  return number
}

export function formatOrderId(id) {
  return String(id).padStart(8, '0')
}

export function formatDate(date) {
  const data = new Date(date)

  const day = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate()
  const month = data.getMonth() + 1
  const hours = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours()
  const minutes =
    data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()

  return `${day}/${month} às ${hours}h${minutes}`
}
