import { ERROR_MESSAGES } from './errorMessages'

export function handleFilterByCategory(category, productList) {
  const filteredProducts = productList.filter(
    product => product.category === category
  )
  return filteredProducts
}

export function handleFailedMessage(category, message) {
  if (!category || !message) {
    return ERROR_MESSAGES['default']
  }

  return ERROR_MESSAGES[category][message] || ERROR_MESSAGES['default']
}
