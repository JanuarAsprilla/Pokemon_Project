import StyledInput from './input'
const Input = ({ type, ...props }) => {
  return <StyledInput type={type} {...props} />
}

export default Input
