import { FunctionComponent, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import { StyledButton } from './Button.styled';

const Button: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren> = ({
  children,
}) => <StyledButton>{children}</StyledButton>;

export default Button;
