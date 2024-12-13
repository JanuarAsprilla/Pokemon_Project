import styled from 'styled-components'

const StyledParagraph = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: ${(props) => props.lineHeight || '1.5'};
  text-align: ${(props) => props.textAlign || 'left'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  letter-spacing: ${(props) => props.letterSpacing || 'normal'};
  text-transform: ${(props) => props.textTransform || 'none'};

  &:hover {
    color: ${(props) => props.hoverColor};
  }
`
export { StyledParagraph }
