import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  position: relative;

  height: 100%;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-color: ${({ theme }) => theme.COLORS.DARK_300};
  border-style: solid;
  border-width: 1px;
  border-radius: 0.8rem;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => (props.$isAdmin ? 'center' : 'start')};
  gap: 1.5rem;

  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: inset 0 0 4rem ${({ theme }) => theme.COLORS.CAKE_100};

    img {
      transform: scale(1.025);
    }

    h3 {
      transform: scale(1.05);
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  img {
    width: 100%;
    max-width: 18rem;
    transition: transform 0.2s ease;
  }

  h3 {
    ${FONT_STYLES.poppins300Bold}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    transition: transform 0.2s ease;
  }

  p {
    ${FONT_STYLES.robotoSmallerRegular}
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    gap: 1.2rem;

    h3 {
      ${FONT_STYLES.poppins100Medium}
    }

    p {
      display: none;
    }
  }
`

export const Price = styled.div`
  ${FONT_STYLES.robotoBiggestRegular}
  color: ${({ theme }) => theme.COLORS.CAKE_200};

  @media (max-width: ${BREAKPOINTS.SM}) {
    ${FONT_STYLES.robotoSmallRegular}
  }
`

export const Actions = styled.section`
  width: 100%;

  margin-top: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;

    button {
      width: 100%;
      line-height: 1;
    }
  }
`

export const CardAction = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  transition: all 0.2s ease;

  &:hover {
    opacity: 0.5;
  }

  > button {
    padding: 0.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > svg {
      font-size: 2.4rem;
    }
  }
`
