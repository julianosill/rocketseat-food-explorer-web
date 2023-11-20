import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useAuth } from './auth.useAuth'

export function useProductHandler() {
  const { addProduct, updateProduct, deleteProduct } = useAuth()
  const [loadingAdd, setLoadingAdd] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)
  const [loadingUpdate, setLoadingUpdate] = useState(false)

  const navigate = useNavigate()

  async function addProductHandler(product, imageFile) {
    setLoadingAdd(true)
    try {
      await addProduct({ product, imageFile }).then(() => {
        toast.success(`"${product.name}" foi adicionado com sucesso.`)
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingAdd(false)
    }
  }

  async function updateProductHandler(id, product, imageFile) {
    setLoadingUpdate(true)
    try {
      await updateProduct({ id, product, imageFile }).then(() => {
        toast.success(`"${product.name}" foi atualizado com sucesso.`)
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingUpdate(false)
    }
  }

  async function deleteProductHandler(product) {
    const deleteConfirm = confirm(
      `Tem certeza que deseja remover "${product.name}"?`
    )

    if (deleteConfirm) {
      setLoadingDelete(true)
      try {
        await deleteProduct(product.id).then(() => {
          toast.success(`"${product.name}" foi removido com sucesso.`)
          navigate('/')
        })
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingDelete(false)
      }
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
    loadingDelete,
    loadingUpdate,
    addProductHandler,
    deleteProductHandler,
    updateProductHandler,
    validateInputsHandler,
  }
}
