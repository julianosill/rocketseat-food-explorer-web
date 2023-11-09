import PropTypes from 'prop-types'

import { FiUpload } from 'react-icons/fi'

import * as S from './styles'

export function UploadInput({ label, image, ...props }) {
  return (
    <S.Container $image={image}>
      <label htmlFor={props.id}>
        {image ? <img src={image} alt="Foto do produto" /> : <FiUpload />}

        {label}
      </label>
      <input type="file" {...props} />
    </S.Container>
  )
}

UploadInput.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string,
  id: PropTypes.string.isRequired,
}
