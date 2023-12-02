import PropTypes from 'prop-types'
import * as S from './styles'

export function Empty({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>
}

function EmptyIcon({ icon: Icon }) {
  return (
    <S.Icon>
      <Icon />
    </S.Icon>
  )
}

function EmptyContent({ children }) {
  return <S.Content>{children}</S.Content>
}

function EmptyTitle({ text }) {
  return <S.Title>{text}</S.Title>
}

function EmptyMessage({ children }) {
  return <S.Message>{children}</S.Message>
}

Empty.Icon = EmptyIcon
Empty.Content = EmptyContent
Empty.Title = EmptyTitle
Empty.Message = EmptyMessage

const propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

Empty.propTypes = { children: propTypes.children }
EmptyIcon.propTypes = { icon: propTypes.icon }
EmptyContent.propTypes = { children: propTypes.children }
EmptyTitle.propTypes = { text: propTypes.text }
EmptyMessage.propTypes = { children: propTypes.children }
