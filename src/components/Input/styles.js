import styled from 'styled-components'

export const Container = styled.input`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  border: none;
  border-radius: 0.8rem;

  padding: 0 1.4rem;
  width: 100%;
  height: 4.8rem;

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
