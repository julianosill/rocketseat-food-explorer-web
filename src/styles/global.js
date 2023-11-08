import { createGlobalStyle } from 'styled-components'
import { FONT_STYLES } from './fontStyles'

export default createGlobalStyle`

:root {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  line-height: 1;
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

label {
  ${FONT_STYLES.robotoSmallRegular}
  display: block;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
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

  /* keyframes animation */

  @keyframes spin {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1 }
    50% { opacity: 0.5 }
  }

}
`
