import PropTypes from 'prop-types'

import { IoClose, IoAdd } from 'react-icons/io5'

import { Label } from '../Label'
import * as S from './styles'

export function InputTags({
  label,
  data,
  newTag,
  setNewTag,
  handleDeleteTag,
  handleAddTag,
  ...props
}) {
  return (
    <>
      <Label htmlFor={props.id}>{label}</Label>
      <S.Tags>
        {data.map(tag => (
          <S.TagItem key={tag}>
            <input
              readOnly
              type="text"
              value={tag}
              style={{ width: `${tag.length * 9 + 60}px` }}
              tabIndex="-1"
            />
            <button
              onClick={e => handleDeleteTag(e, tag)}
              onKeyDown={e => {
                if (e.code === 'Enter') {
                  handleDeleteTag(e, tag)
                }
              }}
            >
              <IoClose />
            </button>
          </S.TagItem>
        ))}

        <S.TagItem $isnew>
          <input
            id={props.id}
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            onKeyDown={e => {
              if (e.code === 'Enter') {
                handleAddTag(e)
              }
            }}
            placeholder="Adicionar"
          />
          <button
            onClick={handleAddTag}
            onKeyDown={e => {
              if (e.code === 'Enter') {
                handleAddTag(e)
              }
            }}
          >
            <IoAdd />
          </button>
        </S.TagItem>
      </S.Tags>
    </>
  )
}

InputTags.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
  newTag: PropTypes.string,
  setNewTag: PropTypes.func,
  handleDeleteTag: PropTypes.func,
  handleAddTag: PropTypes.func,
  id: PropTypes.string,
}
