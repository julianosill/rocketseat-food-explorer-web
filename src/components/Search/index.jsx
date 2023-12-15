import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { PiCaretCircleRight } from 'react-icons/pi'

import { useStateProvider } from '../../hooks/components.useStateProvider'

import { Input } from '../Input'

export function Search({ ...props }) {
  const { setMenuIsOpen } = useStateProvider()

  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return

    navigate(`/produtos?pesquisa=${query}`)
    setQuery('')
    setMenuIsOpen(false)
  }

  return (
    <search>
      <form onSubmit={handleSubmit}>
        <Input.Root>
          <label htmlFor={props.id} className="sr-only">
            Pesquisar
          </label>
          <Input.Content
            type="text"
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
            value={query}
            onChange={e => setQuery(e.target.value)}
            {...props}
          >
            {query && <Input.Button icon={PiCaretCircleRight} />}
          </Input.Content>
        </Input.Root>
      </form>
    </search>
  )
}

Search.propTypes = {
  id: PropTypes.string.isRequired,
}
