import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  width: 100%;
`

export const Header = styled.div`
  display: flex;
`

export const Tab = styled.button`
  ${FONT_STYLES.robotoSmallRegular}

  width: 100%;
  padding: 2.6rem 1.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme, $active }) =>
    $active ? theme.COLORS.DARK_800 : null};
  border-color: ${({ theme }) => theme.COLORS.LIGHT_600};
  border-style: solid;
  border-width: 1px 1px 1px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  transition: background-color 0.2s ease;

  &:first-child {
    border-width: 1px;
    border-radius: 0.8rem 0 0 0;
  }

  &:last-child {
    border-radius: 0 0.8rem 0 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  svg {
    font-size: 2.4rem;
  }
`

export const Content = styled.div`
  padding: 4.8rem 9.6rem;

  border-color: ${({ theme }) => theme.COLORS.LIGHT_600};
  border-style: solid;
  border-width: 0 1px 1px 1px;
  border-radius: 0 0 0.8rem 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.MD}) {
    padding: 4.8rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding: 5.8rem 2.6rem;
  }
`

export const QRcode = styled.img`
  width: 100%;
  height: auto;
  max-width: 25rem;
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.7rem;
`

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.7rem;
`

export const FormAction = styled.div`
  width: 100%;

  button {
    width: 100%;

    > svg {
      font-size: 3.2rem;
    }

    @media (max-width: ${BREAKPOINTS.SM}) {
      > svg {
        display: ${({ $loading }) => !$loading && 'none'};
        font-size: 2rem;
      }
    }
  }
`

export const Status = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.7rem;

  > svg {
    font-size: 12.8rem;
  }

  > p {
    ${FONT_STYLES.robotoBiggerBold}
  }
`
