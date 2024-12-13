import StyledLabel from './label'

const Label = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>
}

export default Label
