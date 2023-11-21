import PropTypes from 'prop-types'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FiChevronRight } from 'react-icons/fi'

import { useStateProvider } from '../../hooks/components.useStateProvider'

import * as S from './styles'

export function InputSearch({ label, icon: Icon, ...props }) {
  const { setMenuIsOpen } = useStateProvider()

  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (query) {
      navigate(`/produtos?pesquisa=${query}`)
      setQuery('')
      setMenuIsOpen(false)
    }
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
