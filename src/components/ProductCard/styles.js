import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  position: relative;
  height: 100%;
  padding: ${({ $admin }) => ($admin ? '4.8rem' : '2.4rem')};

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-color: ${({ theme }) => theme.COLORS.DARK_300};
  border-style: solid;
  border-width: 1px;
  border-radius: 0.8rem;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ $admin }) => ($admin ? 'center' : 'start')};
  gap: 1.5rem;

  &:hover {
    img {
      transform: scale(1.025);
    }
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    gap: 1.2rem;
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 18rem;

  transition: all 0.2s ease;
`

export const Title = styled.h3`
  ${FONT_STYLES.poppins300Bold}
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  &::after {
    content: ' >';
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    ${FONT_STYLES.poppins100Medium}
  }
`

export const Description = styled.p`
  ${FONT_STYLES.robotoSmallerRegular}
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
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

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  > div {
    padding: 0.4rem 0;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;

    button {
      width: 100%;
      line-height: 1;
    }
  }
`

export const Bookmark = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.4rem;
`

export const BookmarkButton = styled.button`
  padding: 0.2rem;

  color: ${({ theme, $favorited }) =>
    $favorited ? theme.COLORS.TOMATO_100 : theme.COLORS.LIGHT_300};

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 2.4rem;
  }
`
