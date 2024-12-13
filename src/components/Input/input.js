import styled from 'styled-components'

const StyledInput = styled.input`
  padding: ${(props) => props.padding || '0.5em'};
  margin: ${(props) => props.margin || '0.5em 0'};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius || '4px'};
  font-size: ${(props) => props.fontSize || '1em'};
  color: ${(props) => props.textColor || '#333'};
  background-color: ${(props) => props.backgroundColor || '#fff'};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  outline: ${(props) => props.outline};
  appearance: ${(props) => props.appearance};
  /* Elimina las flechas en Chrome, Safari, Edge y Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Elimina las flechas en Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`

export default StyledInput
