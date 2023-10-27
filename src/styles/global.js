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

  -webkit-font-smoothing: antialiased;
}

input {
  ${fontStyles.robotoSmallRegular}
}

label {
  ${fontStyles.robotoSmallRegular}
  display: block;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
}

button, label {
  cursor: pointer;
}

`
