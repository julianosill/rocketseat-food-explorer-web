import PropTypes from 'prop-types'
import React from 'react'

import { IoClose, IoAdd } from 'react-icons/io5'

import * as S from './styles'

function ForwardRef(
  { data, newTag, setNewTag, handleDeleteTag, handleAddTag, error, ...props },
  forwardedRef
) {
  return (
    <>
      <S.TagsContainer ref={forwardedRef} $error={error}>
        {data.map(tag => (
          <S.Tag key={tag}>
            <div>{tag}</div>
            <S.TagButton
              onClick={e => handleDeleteTag(e, tag)}
              onKeyDown={e => {
                if (e.code === 'Enter') {
                  handleDeleteTag(e, tag)
                }
              }}
            >
              <IoClose />
            </S.TagButton>
          </S.Tag>
        ))}

        <S.Tag>
          <input
            id={props.id}
            type="text"
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            onKeyDown={e => {
              if (e.code === 'Enter') {
                handleAddTag(e)
              }
            }}
            placeholder="Adicionar"
          />
          <S.TagButton
            $newtag
            onClick={handleAddTag}
            onKeyDown={e => {
              if (e.code === 'Enter') {
                handleAddTag(e)
              }
            }}
          >
            <IoAdd />
          </S.TagButton>
        </S.Tag>
      </S.TagsContainer>
      {error && <S.Error>{error}</S.Error>}
    </>
  )
}

export const InputTags = React.forwardRef(ForwardRef)

ForwardRef.propTypes = {
  data: PropTypes.array,
  newTag: PropTypes.string,
  setNewTag: PropTypes.func,
  handleDeleteTag: PropTypes.func,
  handleAddTag: PropTypes.func,
  id: PropTypes.string,
  error: PropTypes.string,
}
