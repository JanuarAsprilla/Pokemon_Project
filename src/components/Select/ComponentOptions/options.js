import styled from 'styled-components'

const Option = styled.option`
  padding: ${(props) => props.padding || '10px'};
  background-color: ${(props) => props.backgroundColor || 'white'};
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '16px'};
  border: none; /* Puedes cambiarlo si quieres un borde */
  outline: none; /* Evita el contorno por defecto */
`

export default Option
