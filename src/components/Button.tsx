import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.black10};
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.5rem ${({ theme }) => theme.color.black7};
  color: ${({ theme }) => theme.color.black80};
  display: inline-flex;
  font-family: ${({ theme }) => theme.font.default};
  font-size: 1em;
  line-height: 1;
  height: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

interface ButtonProps {
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => (
  <ButtonStyles type="button" {...rest}>
    {children}
  </ButtonStyles>
);

export default Button;
