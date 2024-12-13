import { StyledButton } from './Button';

const Button = ({ onClick, name, type, disabled, children, ...props }) => {
  return (
    <StyledButton
      onClick={onClick}
      name={name}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
