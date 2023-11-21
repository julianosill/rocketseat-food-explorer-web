import PropTypes from 'prop-types'

import { FiChevronRight } from 'react-icons/fi'

import * as S from './styles'
import { useState } from 'react'

export function InputSearch({ label, icon: Icon, ...props }) {
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <search>
      <S.Form onSubmit={handleSubmit}>
        <label htmlFor={props.id} className="sr-only">
          {label}
        </label>

        <S.Icon htmlFor={props.id}>
          <Icon />
        </S.Icon>
        <S.Input
          $hasIcon={Icon}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          {...props}
        />
        {query && (
          <S.Button type="submit">
            <FiChevronRight />
          </S.Button>
        )}
      </S.Form>
    </search>
  )
}

InputSearch.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}
