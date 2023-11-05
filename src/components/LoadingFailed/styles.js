import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'

export const Container = styled.div`
  width: 100%;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    font-size: 4.8rem;
  }

  > p {
    ${FONT_STYLES.robotoSmallRegular}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`
