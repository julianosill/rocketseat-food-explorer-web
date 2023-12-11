import PropTypes from 'prop-types'
import React, { useRef } from 'react'

import { FiUpload } from 'react-icons/fi'

import * as S from './styles'

function ForwardRef({ image, text, error, ...props }, forwardedRef) {
  const labelRef = useRef()

  return (
    <>
      <S.Upload $image={image} $error={error}>
        <label ref={labelRef} htmlFor={props.id}>
          {image ? (
            <>
              <img src={image} alt="Foto do produto" /> {text}
            </>
          ) : (
            <>
              <FiUpload /> {text}
            </>
          )}
        </label>
        <input
          ref={forwardedRef}
          type="file"
          onFocus={() => labelRef.current.classList.add('has-focus')}
          onBlur={() => labelRef.current.classList.remove('has-focus')}
          {...props}
        />
      </S.Upload>
      {error && <S.Error>{error}</S.Error>}
    </>
  )
}

export const InputUpload = React.forwardRef(ForwardRef)

ForwardRef.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
}
