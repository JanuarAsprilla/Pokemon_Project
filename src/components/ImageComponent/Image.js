import styled from 'styled-components'

const BodyImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  z-index: ${(props) => props.zIndex};
  object-fit: ${(props) => props.objectFit};
  object-position: ${(props) => props.objectPosition};
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
  transform: ${(props) => props.transform};
`

export { BodyImage }
