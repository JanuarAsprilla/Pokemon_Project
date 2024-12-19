import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || '#007bff'};
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
  padding: ${(props) => props.padding || '10px 20px'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '5px'};
  cursor: ${(props) => props.cursor || 'pointer'};
  transition: ${(props) => props.transition || 'background-color 0.3s ease'};
  display: ${(props) => props.display || 'inline-block'};
  text-align: ${(props) => props.textAlign || 'center'};
  margin: ${(props) => props.margin || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
    box-shadow: ${(props) => props.hoverBoxShadow};

  &:desabled {
    background-color: ${(props) => props.disabledBackgroundColor || '#ccc'};
    color: ${(props) => props.disabledColor || '#999'};
    cursor: not-allowed;
  }
`

export { StyledButton }
