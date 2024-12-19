import styled from 'styled-components';

const StyledHeading = styled.h1`
color: ${(props) => props.color};
font-size: ${(props) => {
  switch (props.size) {
    case 1:
      return '2.5rem';
    case 2:
      return '2rem';
    case 3:
      return '1.75rem';
    case 4:
      return '1.5rem';
    case 5:
      return '1.25rem';
    case 6:
      return '1rem';
    default:
      return '2rem';
  }
}}
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
`;

export { StyledHeading };
