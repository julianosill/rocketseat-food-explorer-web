import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const Label = styled.label`
  ${FONT_STYLES.robotoSmallRegular}

  width: 100%;
  margin-bottom: 1.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  cursor: pointer;
  display: block;
`

export const Content = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;

  input,
  textarea,
  select {
    ${({ $size }) => {
      if ($size === 'small') return FONT_STYLES.robotoSmallerRegular
      return FONT_STYLES.robotoSmallRegular
    }}

    width: 100%;
    height: fit-content;
    padding: ${({ $icon, $statusIcon }) => {
      if ($icon) return '1.1rem 1.4rem 1.1rem 4.8rem'
      if ($statusIcon) return '1.1rem 1.4rem 1.1rem 3.2rem'
      return '1.1rem 1.4rem'
    }};

    line-height: ${({ $size }) => ($size === 'small' ? null : '1.5')};

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: ${({ theme, $variant }) => {
      if ($variant === 'outline') return 'transparent'
      return theme.COLORS.DARK_800
    }};

    border-color: ${({ theme, $error, $variant }) => {
      if ($error) return theme.COLORS.TOMATO_400
      if ($variant === 'outline' && !$error) return theme.COLORS.LIGHT_100
      return 'transparent'
    }};
    border-style: solid;
    border-width: 1px;
    border-radius: 0.8rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      border-color: ${({ theme, $error }) =>
        $error ? theme.COLORS.TOMATO_400 : 'transparent'};
      outline-color: ${({ theme, $error }) =>
        $error ? theme.COLORS.TOMATO_400 : theme.COLORS.CAKE_200};
      outline-width: 1px;
      outline-style: solid;
    }
  }

  textarea {
    min-height: 17rem;
    resize: vertical;
  }

  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
  }
`

export const Icon = styled.label`
  position: absolute;
  padding: 1.4rem;
  font-size: 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  cursor: pointer;

  display: flex;
  align-items: center;
`

export const StatusIcon = styled.label`
  position: absolute;
  left: 1.6rem;
  width: 0.8rem;
  height: 0.8rem;

  background-color: ${({ theme, $status }) => {
    if ($status === 'pending') return theme.COLORS.TOMATO_300
    if ($status === 'progress') return theme.COLORS.CARROT_100
    if ($status === 'delivered') return theme.COLORS.MINT_100
  }};

  border-radius: 50%;
`

export const SelectArrow = styled.span`
  position: absolute;
  right: 1.4rem;
  font-size: 2.8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  display: flex;
`

export const Upload = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;

  > label {
    ${FONT_STYLES.poppins100Medium}

    width: 100%;
    padding: ${({ $image }) => ($image ? '0.6rem 2.4rem' : '1.1rem 3.2rem')};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    border-color: ${({ theme, $error }) => {
      if ($error) return theme.COLORS.TOMATO_400
      return 'transparent'
    }};
    border-style: solid;
    border-width: 1px;
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    &.has-focus {
      border-color: ${({ theme, $error }) =>
        $error ? theme.COLORS.TOMATO_400 : 'transparent'};
      outline-color: ${({ theme, $error }) =>
        $error ? theme.COLORS.TOMATO_400 : theme.COLORS.CAKE_200};
      outline-width: 1px;
      outline-style: solid;
    }

    img {
      height: 3.4rem;
    }

    svg {
      font-size: 2.4rem;
    }
  }

  > input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    opacity: 0;
    cursor: pointer;
  }
`

export const TagsContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.7rem 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-color: ${({ theme, $error }) => {
    if ($error) return theme.COLORS.TOMATO_400
    return 'transparent'
  }};
  border-style: solid;
  border-width: 1px;
  border-radius: 0.8rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.6rem;
`

export const Tag = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  > div {
    ${FONT_STYLES.robotoSmallRegular}

    padding: 0.7rem 4rem 0.7rem 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border-color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border-style: solid;
    border-width: 1px;
    border-radius: 0.8rem;
  }

  > input {
    ${FONT_STYLES.robotoSmallRegular}

    width: 14rem;
    padding: 0.55rem 4rem 0.55rem 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;

    border-color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border-style: dashed;
    border-width: 1px;
    border-radius: 0.8rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      outline-color: ${({ theme }) => theme.COLORS.CAKE_200};
      outline-width: 1px;
      outline-style: solid;
    }
  }
`

export const TagButton = styled.button`
  position: absolute;
  right: 1.2rem;
  padding: 0.1rem;
  font-size: 1.6rem;

  color: ${({ theme, $newtag }) =>
    $newtag ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_300};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    transform: scale(1.1);
  }
`

export const Button = styled.button`
  position: absolute;
  right: 0.6rem;
  padding: 0.4rem;
  font-size: 2.8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.4rem;

  display: flex;

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    transform: none;
    opacity: 0.5;
  }
`

export const Error = styled.span`
  ${FONT_STYLES.robotoSmallerRegular}

  position: absolute;
  bottom: -2.5rem;

  color: ${({ theme }) => theme.COLORS.TOMATO_400};
`
