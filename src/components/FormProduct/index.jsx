import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { api, imageUrl } from '../../services/api'
import { formatToPrice, formatToNumber } from '../../utils/formatters'
import { useProductHandler } from '../../hooks/product.useProductHandler'

import { Input } from '../Input'
import { InputPrice } from '../InputPrice'
import { InputTags } from '../InputTags'
import { InputUpload } from '../InputUpload'
import { Select } from '../Select'
import { Textarea } from '../Textarea'
import { Button } from '../Button'
import * as S from './styles'

export function FormProduct({ data }) {
  const {
    loadingAdd,
    loadingDelete,
    loadingUpdate,
    addProductHandler,
    updateProductHandler,
    deleteProductHandler,
    validateInputsHandler,
  } = useProductHandler()

  const productData = data
  const productImage = productData?.image && `${imageUrl}/${productData?.image}`
  const productPrice = productData && formatToPrice(productData.price)

  const [categories, setCategories] = useState(null)
  const [image, setImage] = useState(productImage || null)
  const [name, setName] = useState(productData?.name || '')
  const [ingredients, setIngredients] = useState(productData?.ingredients || [])
  const [category, setCategory] = useState(productData?.category || '')
  const [price, setPrice] = useState(productPrice || '')
  const [description, setDescription] = useState(productData?.description || '')

  const [newIngredient, setNewIngredient] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [error, setError] = useState({})

  const navigate = useNavigate()

  function preventSubmitOnEnter(e) {
    if (e.code === 'Enter') {
      e.preventDefault()
    }
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0]

    if (file) {
      if (file.type !== 'image/png') {
        return alert('A imagem deve estar em formato PNG.')
      }
      setImageFile(file)
      const imagePreview = URL.createObjectURL(file)
      setImage(imagePreview)
    }
  }

  function handleAddTag(e) {
    e.preventDefault()

    if (newIngredient) {
      const hasTag = ingredients.includes(newIngredient)
      if (hasTag) {
        return alert(`"${newIngredient}" já foi adicionado.`)
      }
      setIngredients([...ingredients, newIngredient])
      setNewIngredient('')
    }
  }

  function handleDeleteTag(ingredient) {
    const filteredTags = ingredients.filter(tag => tag !== ingredient)
    setIngredients(filteredTags)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError({})

    const error = validateInputsHandler({
      image,
      name,
      category,
      newIngredient,
      ingredients,
      price,
      description,
    })

    if (error) return setError(error)

    const newProduct = {
      name,
      description,
      category,
      ingredients,
      price: formatToNumber(price),
    }

    productData
      ? updateProductHandler(productData.id, newProduct, imageFile)
      : addProductHandler(newProduct, imageFile).then(() => {
          setImage(null)
          setImageFile(null)
          setName('')
          setIngredients([])
          setCategory('')
          setPrice('')
          setDescription('')
        })
  }

  async function handleDeleteProduct(e) {
    e.preventDefault()
    deleteProductHandler(productData)
  }

  function handleCancel(e) {
    e.preventDefault()
    navigate(-1)
  }

  useEffect(() => {
    async function getCategories() {
      await api
        .get(`/categories`)
        .then(response => {
          setCategories(response.data.map(category => category.name))
        })
        .catch(error => console.error(error))
    }
    getCategories()
  }, [])

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.FlexRow>
        <S.UploadImage>
          <InputUpload
            id="image"
            label="Imagem do produto"
            image={image}
            text={image ? 'Selecione para alterá-la' : 'Selecione a imagem'}
            onChange={handleChangeAvatar}
          />
          {error?.image && <S.Error>{error.image}</S.Error>}
        </S.UploadImage>
        <S.Name>
          <Input
            id="name"
            type="text"
            label="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={preventSubmitOnEnter}
            placeholder="Ex.: Salada Caesar"
          />
          {error?.name && <S.Error>{error.name}</S.Error>}
        </S.Name>
        {categories && (
          <S.Categories>
            <Select
              id="categories"
              label="Categoria"
              options={categories}
              value={category}
              onChange={e => setCategory(e.target.value)}
              onKeyDown={preventSubmitOnEnter}
            />
            {error?.category && <S.Error>{error.category}</S.Error>}
          </S.Categories>
        )}
      </S.FlexRow>

      <S.FlexRow>
        <S.Ingredients>
          <InputTags
            id="ingredients"
            label="Ingredientes"
            data={ingredients}
            newTag={newIngredient}
            setNewTag={setNewIngredient}
            handleDeleteTag={handleDeleteTag}
            handleAddTag={handleAddTag}
          />
          {error?.ingredients && <S.Error>{error.ingredients}</S.Error>}
          {error?.newIngredient && <S.Error>{error.newIngredient}</S.Error>}
        </S.Ingredients>
        <S.Price>
          <InputPrice
            id="price"
            label="Preço"
            value={price}
            onChange={e => setPrice(e.target.value)}
            onKeyDown={preventSubmitOnEnter}
            placeholder="R$ 00,00"
          />
          {error?.price && <S.Error>{error.price}</S.Error>}
        </S.Price>
      </S.FlexRow>

      <S.FlexRow>
        <Textarea
          id="description"
          label="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
        />
        {error?.description && <S.Error>{error.description}</S.Error>}
      </S.FlexRow>

      <S.Actions>
        <Button text="Cancelar" variant="secondary" onClick={handleCancel} />
        {productData ? (
          <>
            <Button
              icon={loadingDelete ? AiOutlineLoading3Quarters : null}
              text={loadingDelete ? 'Excluindo produto' : 'Excluir produto'}
              variant="secondary"
              disabled={loadingDelete}
              loading={loadingDelete}
              onClick={handleDeleteProduct}
            />
            <Button
              icon={loadingUpdate ? AiOutlineLoading3Quarters : null}
              text={loadingUpdate ? 'Salvando alterações' : 'Salvar alterações'}
              disabled={loadingUpdate}
              loading={loadingUpdate}
              onClick={handleSubmit}
            />
          </>
        ) : (
          <Button
            icon={loadingAdd ? AiOutlineLoading3Quarters : null}
            text={loadingAdd ? 'Adicionando produto' : 'Adicionar produto'}
            disabled={loadingAdd}
            loading={loadingAdd}
            onClick={handleSubmit}
          />
        )}
      </S.Actions>
    </S.Container>
  )
}

FormProduct.propTypes = {
  data: PropTypes.object,
}
