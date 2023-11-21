export function formatToPrice(amount) {
  const price = amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return price
}

export function formatToNumber(amount) {
  const [, price] = amount.split('R$')
  const number = parseFloat(price.replace(/\./g, '').replace(',', '.'))
  return number
}
