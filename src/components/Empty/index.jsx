import PropTypes from 'prop-types'
import * as S from './styles'

function EmptyRoot({ orientation = 'horizontal', children, ...props }) {
  return (
    <S.Container orientation={orientation} {...props}>
      {children}
    </S.Container>
  )
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

export const Empty = {
  Root: EmptyRoot,
  Icon: EmptyIcon,
  Content: EmptyContent,
  Title: EmptyTitle,
  Message: EmptyMessage,
}

const propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  children: PropTypes.node.isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string,
}

EmptyRoot.propTypes = {
  orientation: propTypes.orientation,
  children: propTypes.children,
}
EmptyIcon.propTypes = { icon: propTypes.icon }
EmptyContent.propTypes = { children: propTypes.children }
EmptyTitle.propTypes = { text: propTypes.text }
EmptyMessage.propTypes = { children: propTypes.children }
