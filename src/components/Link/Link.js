// LinkStyles.js
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLinks = styled(Link)`
  text-decoration: ${(props) => props.textDecoration};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  cursor: ${(props) => props.cursor || 'pointer'};
  transition: ${(props) => props.transition || 'color 0.3s ease'};

  &:hover {
    color: ${(props) => props.hoverColor};
    text-decoration: ${(props) => props.hoverTextDecoration};
  }

  &:active {
    color: ${(props) => props.activeColor};
  }
`

export { StyledLinks }
