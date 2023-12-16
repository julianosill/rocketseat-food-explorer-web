import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`

export const Header = styled.header`
  margin: 3.4rem 0 3.2rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    margin: 5.6rem 0 2.8rem;
  }
`

export const Table = styled.div`
  ${FONT_STYLES.robotoSmallerRegular}
  width: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  display: flex;
  flex-direction: column;

  [data-cell='status'] {
    width: ${({ $admin }) => ($admin ? '22rem' : '16rem')};
  }

  [data-cell='id'] {
    width: 16rem;
  }

  [data-cell='description'] {
    width: 100%;
  }

  [data-cell='date'] {
    width: 16rem;
  }

  @media (max-width: ${BREAKPOINTS.LG}) {
    [data-cell='id'] {
      width: 12rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    gap: 1.7rem;

    [data-cell='status'] {
      order: ${({ $admin }) => ($admin ? '4' : '2')};
      width: ${({ $admin }) => ($admin ? '100%' : 'auto')};
    }

    [data-cell='id'] {
      order: 1;
      width: auto;
    }

    [data-cell='description'] {
      order: ${({ $admin }) => ($admin ? '3' : '4')};
      width: 100%;
    }

    [data-cell='date'] {
      order: ${({ $admin }) => ($admin ? '2' : '3')};
      width: auto;
    }
  }
`

export const TableHeader = styled.div`
  ${FONT_STYLES.robotoSmallerBold}

  width: 100%;

  display: grid;
  grid-template-columns: auto auto 1fr auto;

  @media (max-width: ${BREAKPOINTS.SM}) {
    display: none;
  }
`

export const TableHead = styled.div`
  padding: 2.1rem 2.4rem;

  border-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-style: solid;
  border-width: 2px 2px 2px 0;

  display: flex;
  align-items: center;

  &:nth-child(1) {
    border-width: 2px;
    border-top-left-radius: 0.8rem;
  }

  &:nth-last-child(1) {
    border-top-right-radius: 0.8rem;
  }
`

export const TableRow = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: auto auto 1fr auto;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding: 1.6rem 2rem;

    border-color: ${({ theme }) => theme.COLORS.DARK_1000};
    border-style: solid;
    border-width: 2px;
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.6rem 3.1rem;
  }
`

export const TableCell = styled.div`
  padding: 1.6rem 2.4rem;

  border-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-style: solid;
  border-width: 0 2px 2px 0;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:nth-child(1) {
    border-width: 0 2px 2px 2px;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding: 0;
    border: none;
  }
`

export const StatusIcon = styled.div`
  width: 0.8rem;
  height: 0.8rem;

  background-color: ${({ theme, $status }) => {
    if ($status === 'pending') return theme.COLORS.TOMATO_300
    if ($status === 'progress') return theme.COLORS.CARROT_100
    if ($status === 'delivered') return theme.COLORS.MINT_100
  }};
  border-radius: 50%;
`
