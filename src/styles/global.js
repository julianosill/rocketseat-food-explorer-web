import { createGlobalStyle } from 'styled-components'

const fontWeight = {
  poppinsRegular: `
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 400;
  `,
  poppinsMedium: `
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 500;
  `,
  poppinsBold: `
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 700;
  `,
  robotoRegular: `
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 400;
  `,
  robotoBold: `
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 700;
  `,
}

export const fontStyles = {
  poppins100Medium: `
    ${fontWeight.poppinsMedium}
    font-size: 1.4rem;
    line-height: 2.4rem;
  `,
  poppins200Medium: `
    ${fontWeight.poppinsMedium}
    font-size: 2rem;
    line-height: 1.6;
  `,
  poppins300Regular: `
    ${fontWeight.poppinsRegular}
    font-size: 2.4rem;
    line-height: 1.4;
  `,
  poppins300Medium: `
    ${fontWeight.poppinsMedium}
    font-size: 2.4rem;
    line-height: 1.4;
  `,
  poppins300Bold: `
    ${fontWeight.poppinsBold}
    font-size: 2.4rem;
    line-height: 1.4;
  `,
  poppins400Medium: `
    ${fontWeight.poppinsMedium}
    font-size: 3.2rem;
    line-height: 1.4;
  `,
  poppins500Medium: `
    ${fontWeight.poppinsMedium}
    font-size: 4rem;
    line-height: 1.4;
  `,
  robotoSmallestRegular: `
    ${fontWeight.robotoRegular}
    font-size: 1.2rem;
    line-height: 1.6;
  `,
  robotoSmallerRegular: `
    ${fontWeight.robotoRegular}
    font-size: 1.4rem;
    line-height: 1.6;
  `,
  robotoSmallerBold: `
    ${fontWeight.robotoBold}
    font-size: 1.4rem;
    line-height: 1.6;
  `,
  robotoSmallSpaced: `
    ${fontWeight.robotoRegular}
    font-size: 1.6rem;
    line-height: 1.6;
  `,
  robotoSmallRegular: `
    ${fontWeight.robotoRegular}
    font-size: 1.6rem;
    line-height: 1;
  `,
  robotoBigBold: `
    ${fontWeight.robotoBold}
    font-size: 2rem;
    line-height: 1.6;
  `,
  robotoBiggerBold: `
    ${fontWeight.robotoBold}
    font-size: 2.4rem;
    line-height: normal;
  `,
  robotoBiggestRegular: `
    ${fontWeight.robotoRegular}
    font-size: 3.2rem;
    line-height: 1.6;
  `,
  robotoGiantBold: `
    ${fontWeight.robotoBold}
    font-size: 4.2rem;
    line-height: normal;
  `,
}

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

ul {
  list-style: none;
}

input {
  ${fontStyles.robotoSmallRegular}

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &:focus {
    border-color: ${({ theme }) => theme.COLORS.CAKE_200};
    outline-color: ${({ theme }) => theme.COLORS.CAKE_200};
    outline-width: 1px;
    outline-style: solid;
  }
}

label {
  ${fontStyles.robotoSmallRegular}
  
  display: block;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

}

button {
  ${fontStyles.poppins100Medium}
  
  background: none;
  border: none;
  cursor: pointer;
  outline-offset: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
  
  &:focus {
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
