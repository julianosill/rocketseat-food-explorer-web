export function handleFailedMessage(message) {
  switch (message) {
    case 'product/product-not-found':
      return 'Produto não encontrado.'
    default:
      return 'Ops, ocorreu algum erro.'
  }
}
