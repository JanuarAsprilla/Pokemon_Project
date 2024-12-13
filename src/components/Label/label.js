import styled from 'styled-components'
const StyledLabel = styled.label`
  font-size: ${(props) => props.fontSize || '1em'};
  margin-bottom: ${(props) => props.marginBottom || '0.25em'};
  color: ${(props) => props.color || '#333'};
  font-weight: ${(props) => props.fontWeight || 'normal'};

  &.error {
    color: red; /* Color rojo para errores */
    font-weight: bold; /* Negrita para resaltar el error */
  }

  &.success {
    color: green; /* Color verde para éxito */
  }
`

export default StyledLabel
