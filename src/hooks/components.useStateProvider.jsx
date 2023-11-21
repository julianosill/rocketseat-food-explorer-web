import { useContext } from 'react'

import { StateContext } from './components.StateProvider'

export function useStateProvider() {
  const context = useContext(StateContext)
  return context
}
