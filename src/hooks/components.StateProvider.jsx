import PropTypes from 'prop-types'

import { createContext, useState } from 'react'

export const StateContext = createContext({})

export function StateProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <StateContext.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
