import { Link } from 'react-router-dom'
import { StyledLinks } from './Link'

const Links = ({ to, children, ...props }) => {
  return (
    <StyledLinks as={Link} to={to} {...props}>
      {children}
    </StyledLinks>
  )
}

export default Links
