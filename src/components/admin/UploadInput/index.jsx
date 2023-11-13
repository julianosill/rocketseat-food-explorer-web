import PropTypes from 'prop-types'

import { useRef } from 'react'
import { FiUpload } from 'react-icons/fi'

import { Label } from '../../Label'

import * as S from './styles'

export function UploadInput({ label, text, image, ...props }) {
  const labelRef = useRef()
  const inputRef = useRef()

  return (
    <>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <S.Container $image={image}>
        <label ref={labelRef} htmlFor={props.id}>
          {image ? <img src={image} alt="Foto do produto" /> : <FiUpload />}
          {text}
        </label>
        <input
          type="file"
          ref={inputRef}
          onFocus={() => labelRef.current.classList.add('has-focus')}
          onBlur={() => labelRef.current.classList.remove('has-focus')}
          onKeyDownCapture={e => {
            if (e.code === 'Enter') {
              inputRef.current.click()
            }
          }}
          {...props}
        />
      </S.Container>
    </>
  )
}

UploadInput.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string,
  id: PropTypes.string.isRequired,
}
