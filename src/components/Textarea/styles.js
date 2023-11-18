import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'

export const Container = styled.div`
  width: 100%;
`

export const Textarea = styled.textarea`
  ${FONT_STYLES.robotoSmallRegular}

  width: 100%;
  min-height: 17rem;
  resize: vertical;
  padding: 1.2rem 1.4rem;
  line-height: 1.5;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border: none;
  border-radius: 0.8rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &:focus {
    border-color: ${({ theme }) => theme.COLORS.CAKE_200};
    outline-color: ${({ theme }) => theme.COLORS.CAKE_200};
    outline-width: 1px;
    outline-style: solid;
  }
`
