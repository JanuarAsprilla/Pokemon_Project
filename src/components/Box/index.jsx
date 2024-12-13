import { BoxContainer } from './box'

const Box = ({ children, ...props }) => {
  return <BoxContainer {...props}>{children}</BoxContainer>
}

export default Box
