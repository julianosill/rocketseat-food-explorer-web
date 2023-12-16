import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { ANIMATE } from '../../styles/animations'

export const Container = styled.div`
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === 'vertical' ? 'column' : 'row'};
  align-items: center;
  gap: 2rem;

  ${ANIMATE.pulse}

  > svg {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    font-size: 4.8rem;

    ${ANIMATE.spin}
  }

  > p {
    ${FONT_STYLES.robotoSmallRegular}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`
