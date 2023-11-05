export function priceFormatter(amount) {
  const price = amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return price
}
