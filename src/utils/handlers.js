import { ERROR_MESSAGES } from './errorMessages'

export function handleFilterByCategory(category, productList) {
  const filteredProducts = productList.filter(
    product => product.category === category
  )
  return filteredProducts
}

export function handleFailedMessage(category, message) {
  if (!message) {
    return ERROR_MESSAGES['default']
  }

  if (category && message) {
    for (const category of Object.keys(ERROR_MESSAGES)) {
      const errorMessage =
        ERROR_MESSAGES[category][message] || ERROR_MESSAGES['default']
      return errorMessage
    }
  }
}
