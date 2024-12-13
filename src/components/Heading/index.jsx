import { StyledHeading } from './Heading';

const Heading = ({ level, children, ...props }) => {
  const Tag = `h${level}`;
  return (
    <StyledHeading as={Tag} level={level} {...props}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
