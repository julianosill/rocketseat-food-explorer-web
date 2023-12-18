import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { api } from '../../services/api'
import { handleApiError } from '../../utils/handlers'

export function useFormProduct() {
  const [loadingAdd, setLoadingAdd] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)
  const [loadingUpdate, setLoadingUpdate] = useState(false)

  const navigate = useNavigate()

  async function addProduct(product, imageFile) {
    try {
      setLoadingAdd(true)

      const product_id = await api
        .post('/products', product, { withCredentials: true })
        .then(response => response.data.id)

      if (product_id && imageFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('image', imageFile)
        await api.patch(`products/image/${product_id}`, fileUploadForm, {
          withCredentials: true,
        })
      }

      toast.success(`"${product.name}" foi adicionado com sucesso.`)
      navigate('/')
    } catch (error) {
      console.error(error)
      handleApiError(error)
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
        await api.patch(`products/image/${id}`, fileUploadForm, {
          withCredentials: true,
        })
      }

      await api
        .put(`/products/${id}`, product, { withCredentials: true })
        .then(() => {
          toast.success(`"${product.name}" foi atualizado com sucesso.`)
          navigate('/')
        })
    } catch (error) {
      console.error(error)
      handleApiError('product', error)
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
        await api
          .delete(`/products/${product.id}`, { withCredentials: true })
          .then(() => {
            toast.success(`"${product.name}" foi removido com sucesso.`)
            navigate('/')
          })
      }
    } catch (error) {
      console.error(error)
      handleApiError('product', error)
    } finally {
      setLoadingDelete(false)
    }
  }

  function validateInputs(inputs) {
    if (!inputs.image) {
      return { image: 'Adicione a imagem' }
    }
    if (!inputs.name) {
      return { name: 'Informe o nome' }
    }
    if (!inputs.category) {
      return { category: 'Selecione uma categoria' }
    }
    if (inputs.newIngredient) {
      return { ingredients: 'O ingrediente ainda não foi adicionado' }
    }
    if (!inputs.ingredients.length) {
      return { ingredients: 'Adicione ao menos um ingrediente' }
    }
    if (!inputs.price) {
      return { price: 'Informe o preço' }
    }
    if (!inputs.description) {
      return { description: 'Insira uma descrição' }
    }
  }

  return {
    loadingAdd,
    loadingUpdate,
    loadingDelete,
    addProduct,
    updateProduct,
    deleteProduct,
    validateInputs,
  }
}
