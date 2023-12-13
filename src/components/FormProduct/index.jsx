import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { imageUrl } from '../../services/api'
import { formatToPrice, formatToNumber } from '../../utils/formatters'
import { useFormProduct } from './useFormProduct'

import { Input } from '../Input'
import { Button } from '../Button'
import * as S from './styles'

export function FormProduct({ data }) {
  const {
    loadingAdd,
    loadingUpdate,
    loadingDelete,
    addProduct,
    updateProduct,
    deleteProduct,
    validateInputs,
  } = useFormProduct()

  const product = data
  const productImage = product?.image && `${imageUrl}/${product?.image}`
  const productPrice = product && formatToPrice(product.price)

  const [image, setImage] = useState(productImage || null)
  const [name, setName] = useState(product?.name || '')
  const [ingredients, setIngredients] = useState(product?.ingredients || [])
  const [category, setCategory] = useState(product?.category || '')
  const [price, setPrice] = useState(productPrice || '')
  const [description, setDescription] = useState(product?.description || '')

  const [imageFile, setImageFile] = useState(null)
  const [newIngredient, setNewIngredient] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  function preventDefault(e) {
    if (e.code === 'Enter') {
      e.preventDefault()
    }
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0]

    if (!file) return

    if (file.type !== 'image/png') {
      return alert('A imagem deve estar em formato PNG.')
    }

    setImageFile(file)
    const imagePreview = URL.createObjectURL(file)
    return setImage(imagePreview)
  }

  function handleAddTag(e) {
    e.preventDefault()
    if (!newIngredient) return

    const hasTag = ingredients.includes(newIngredient)
    if (hasTag) {
      return alert(`"${newIngredient}" já foi adicionado.`)
    }

    setIngredients([...ingredients, newIngredient])
    setNewIngredient('')
  }

  function handleDeleteTag(e, ingredient) {
    e.preventDefault()
    const filteredTags = ingredients.filter(tag => tag !== ingredient)
    setIngredients(filteredTags)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError(null)

    const productData = {
      image,
      name,
      category,
      newIngredient,
      ingredients,
      price: formatToNumber(price),
      description,
    }

    const error = validateInputs(productData)
    if (error) return setError(error)

    product
      ? updateProduct(product.id, productData, imageFile).catch(error => {
          setError(error)
        })
      : addProduct(productData, imageFile)
          .then(() => {
            setImage(null)
            setImageFile(null)
            setName('')
            setIngredients([])
            setCategory('')
            setPrice('')
            setDescription('')
          })
          .catch(error => {
            setError(error)
          })
  }

  async function handleDeleteProduct(e) {
    e.preventDefault()
    deleteProduct(product)
  }

  function handleCancel(e) {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <S.Container>
      <S.FormRow>
        <Input.Root data-form="image">
          <Input.Label text="Imagem do produto" htmlFor="image2" />
          <Input.Upload
            id="image2"
            image={image}
            text={image ? 'Selecione para alterá-la' : 'Selecione a imagem'}
            onChange={handleChangeAvatar}
            error={error?.image}
          />
        </Input.Root>

        <Input.Root data-form="name">
          <Input.Label text="Nome" htmlFor="name" />
          <Input.Content
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={preventDefault}
            placeholder="Ex.: Salada Caesar"
            error={error?.name}
          />
        </Input.Root>

        <Input.Root data-form="category">
          <Input.Label text="Categoria" htmlFor="category" />
          <Input.Select
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            onKeyDown={preventDefault}
            error={error?.category}
          >
            <option value="">Selecione a categoria</option>
            <option value="Refeições">Refeições</option>
            <option value="Sobremesas">Sobremesas</option>
            <option value="Bebidas">Bebidas</option>
          </Input.Select>
        </Input.Root>
      </S.FormRow>

      <S.FormRow>
        <Input.Root data-form="ingredients">
          <Input.Label text="Ingredientes" htmlFor="ingredients" />
          <Input.Tags
            id="ingredients"
            data={ingredients}
            newTag={newIngredient}
            setNewTag={setNewIngredient}
            handleDeleteTag={handleDeleteTag}
            handleAddTag={handleAddTag}
            error={error?.ingredients}
          />
        </Input.Root>

        <Input.Root data-form="price">
          <Input.Label text="Preço" htmlFor="price" />
          <Input.Price
            id="price"
            type="text"
            value={price}
            onChange={e => setPrice(e.target.value)}
            onKeyDown={preventDefault}
            placeholder="R$ 00,00"
            error={error?.price}
          />
        </Input.Root>
      </S.FormRow>

      <Input.Root>
        <Input.Label text="Descrição" htmlFor="description" />
        <Input.Textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
          error={error?.description}
        />
      </Input.Root>

      {error?.apiError && <S.Error>{error.apiError}</S.Error>}

      <S.Actions>
        <Button text="Cancelar" variant="secondary" onClick={handleCancel} />
        {product ? (
          <>
            <Button
              icon={loadingDelete ? AiOutlineLoading3Quarters : null}
              text={loadingDelete ? 'Excluindo produto...' : 'Excluir produto'}
              variant="secondary"
              disabled={loadingDelete}
              loading={loadingDelete}
              onClick={handleDeleteProduct}
            />
            <Button
              icon={loadingUpdate ? AiOutlineLoading3Quarters : null}
              text={
                loadingUpdate ? 'Salvando alterações...' : 'Salvar alterações'
              }
              disabled={loadingUpdate}
              loading={loadingUpdate}
              onClick={handleSubmit}
            />
          </>
        ) : (
          <Button
            icon={loadingAdd ? AiOutlineLoading3Quarters : null}
            text={loadingAdd ? 'Adicionando produto...' : 'Adicionar produto'}
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
