import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'

export const Tags = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 0.8rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.6rem;
`

export const TagItem = styled.div`
  position: relative;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? 'none' : theme.COLORS.LIGHT_500};

  border-color: ${({ theme }) => theme.COLORS.LIGHT_500};
  border-style: dashed;
  border-width: 1px;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;

  > input {
    ${FONT_STYLES.robotoSmallRegular}

    width: 14rem;
    padding: 0.55rem 4rem 0.55rem 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      border-radius: 0.8rem;
      border-color: ${({ theme }) => theme.COLORS.CAKE_200};
      outline-color: ${({ theme }) => theme.COLORS.CAKE_200};
      outline-width: 1px;
      outline-style: solid;
    }
  }

  > button {
    position: absolute;
    right: 1.5rem;

    padding: 0.1rem;

    color: ${({ theme, $isnew }) =>
      $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_300};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: color 0.2s ease;

    font-size: 1.6rem;

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`
