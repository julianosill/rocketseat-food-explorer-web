import { createGlobalStyle } from 'styled-components'
import { BREAKPOINTS } from './breakpoints'

export default createGlobalStyle`

  /* keyframes animation */

  @keyframes spin {
      from { transform: rotate(0deg) }
      to { transform: rotate(360deg) }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1 }
      50% { opacity: 0.5 }
    }

  /* scroll bar */

  ::-webkit-scrollbar {
    width: 14px
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    border-radius: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.CAKE_100};
    border-color: ${({ theme }) => theme.COLORS.DARK_400};
    border-style: solid;
    border-width: 3px;
    border-radius: 7px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

:root {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: 1;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  -webkit-font-smoothing: antialiased;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.mobile-hide {
  @media (max-width: ${BREAKPOINTS.SM}) {
    display: none;
  }
}

.mobile-only {
  @media (min-width: ${BREAKPOINTS.MIN_SM}) {
    display: none;
  }
}

a {
  text-decoration: none;
  outline-offset: 4px;

  &:focus {
    border-radius: 0.5rem;
    outline-color: ${({ theme }) => theme.COLORS.CAKE_200};
    outline-width: 1px;
    outline-style: solid;
  }
}

ul {
  list-style: none;
}

button {  
  background: none;
  border: none;
  cursor: pointer;
  outline-offset: 4px;

  &:focus {
    border-radius: 0.5rem;
    outline-color: ${({ theme }) => theme.COLORS.CAKE_200};
    outline-width: 1px;
    outline-style: solid;
  }

  &:disabled {
    cursor: default;
    outline: none;
  }
}
`
