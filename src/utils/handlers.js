export function handleFilterByCategory(category, productList) {
  const filteredProducts = productList.filter(
    product => product.category === category
  )
  return filteredProducts
}
