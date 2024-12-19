import styled from 'styled-components';

const BoxContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  background-image: ${(props) => props.backgroundImage};
  background-size: ${(props) => props.backgroundSize};
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: ${(props) => props.backgroundRepeat};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  justify-items: ${(props) => props.justifyItems};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  grid-template-rows: ${(props) => props.gridTemplateRows};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  z-index: ${(props) => props.zIndex};
  overflow: ${(props) => props.overflow};
  box-shadow: ${(props) => props.boxShadow};
  border: ${(props) => props.border};
  transition: ${(props) => props.transition};
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border-top: ${(props) => props.borderTop};
  border-right: ${(props) => props.borderRight};
  border-bottom: ${(props) => props.borderBottom};
  border-left: ${(props) => props.borderLeft};

  &:hover {
    box-shadow: ${(props) => props.hoverBoxShadow};
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
    border-top: ${(props) => props.hoverBorderTop};
    border-right: ${(props) => props.hoverBorderRight};
    border-bottom: ${(props) => props.hoverBorderBottom};
    border-left: ${(props) => props.hoverBorderLeft};
    opacity: ${(props) => props.hoverOpacity};
    cursor: ${(props) => props.hoverCursor};
    transition: ${(props) => props.hoverTransition};
    transform: ${(props) => props.hoverTransform};
    z-index: ${(props) => props.hoverZIndex};
    border-radius: ${(props) => props.hoverBorderRadius};
    border: ${(props) => props.hoverBorder};
  }

  &::before {
    content: ${(props) => props.beforeContent};
    position: ${(props) => props.beforePosition};
    top: ${(props) => props.beforeTop};
    left: ${(props) => props.beforeLeft};
    width: ${(props) => props.beforeWidth};
    height: ${(props) => props.beforeHeight};
    background-image: ${(props) => props.beforeBackgroundImage};
    background-size: ${(props) => props.beforeBackgroundSize};
    background-position: ${(props) => props.beforeBackgroundPosition};
    background-repeat: ${(props) => props.beforeBackgroundRepeat};
    border-radius: ${(props) => props.beforeBorderRadius};
    opacity: ${(props) => props.beforeOpacity};
    z-index: ${(props) => props.beforeZIndex};
  }

  > * {
    position: ${(props) => props.contentPosition};
    z-index: ${(props) => props.contentZIndex};
  }
`;

export { BoxContainer };
