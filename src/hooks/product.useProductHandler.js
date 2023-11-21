import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { api } from '../services/api'

export function useProductHandler() {
  const [loadingAdd, setLoadingAdd] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)
  const [loadingUpdate, setLoadingUpdate] = useState(false)

  const navigate = useNavigate()

  async function addProduct(product, imageFile) {
    try {
      setLoadingAdd(true)

      const product_id = await api
        .post('/products', product)
        .then(response => response.data.id)
        .catch(error => {
          throw new Error(error)
        })

      if (product_id && imageFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('image', imageFile)
        await api.patch(`products/image/${product_id}`, fileUploadForm)
      }

      toast.success(`"${product.name}" foi adicionado com sucesso.`)
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message)
      } else {
        console.error(error)
      }
      throw new Error(error)
    } finally {
      setLoadingAdd(false)
    }
  }

  async function updateProduct(id, product, imageFile) {
    try {
      setLoadingUpdate(true)

      if (imageFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('image', imageFile)
        await api.patch(`products/image/${id}`, fileUploadForm)
      }

      await api
        .put(`/products/${id}`, product)
        .then(() => {
          toast.success(`"${product.name}" foi atualizado com sucesso.`)
        })
        .catch(error => {
          throw new Error(error)
        })
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message)
      } else {
        console.error(error)
      }
      throw new Error(error)
    } finally {
      setLoadingUpdate(false)
    }
  }

  async function deleteProduct(product) {
    try {
      setLoadingDelete(true)
      const deleteConfirm = confirm(
        `Tem certeza que deseja remover "${product.name}"?`
      )

      if (deleteConfirm) {
        await api.delete(`/products/${product.id}`).then(() => {
          toast.success(`"${product.name}" foi removido com sucesso.`)
          navigate('/')
        })
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message)
      } else {
        console.error(error)
      }
      throw new Error(error)
    } finally {
      setLoadingDelete(false)
    }
  }

  function validateInputsHandler(inputs) {
    if (!inputs.image) {
      return { image: 'Adicione a imagem do produto.' }
    }
    if (!inputs.name) {
      return { name: 'Informe o nome do produto.' }
    }
    if (!inputs.category) {
      return { category: 'Selecione uma categoria.' }
    }
    if (inputs.newIngredient) {
      return { ingredients: 'O ingrediente ainda não foi adicionado.' }
    }
    if (!inputs.ingredients.length) {
      return { ingredients: 'Adicione ao menos um ingrediente.' }
    }
    if (!inputs.price) {
      return { price: 'Informe o preço do produto.' }
    }
    if (!inputs.description) {
      return { description: 'Insira uma descrição sobre o produto.' }
    }
  }

  return {
    loadingAdd,
    addProduct,
    loadingUpdate,
    updateProduct,
    loadingDelete,
    deleteProduct,
    validateInputsHandler,
  }
}
