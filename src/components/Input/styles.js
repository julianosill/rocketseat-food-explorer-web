import styled from 'styled-components'

export const Container = styled.input`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  border: none;
  border-radius: 0.8rem;

  padding: 1.2rem 1.4rem;
  width: 100%;
`
