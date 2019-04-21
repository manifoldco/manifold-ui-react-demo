import React from "react";
import styled from "styled-components";

const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.black10};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  & a {
    align-items: center;
    display: flex;
    font-size: ${({ theme }) => theme.font.down1};
    text-decoration: none;
    transition: color 150ms linear;

    &:focus,
    &:hover {
      color: ${({ theme }) => theme.color.blue};
    }
  }
`;

const Heading = styled.h1`
  font-size: 1em;
  margin-bottom: 0;
  margin-top: 0;
  text-align: center;
`;

interface SubNavProps {
  backLink?: React.ReactNode;
}

const SubNav: React.FunctionComponent<SubNavProps> = ({
  backLink,
  children,
  ...rest
}) => (
  <Header {...rest}>
    <div>{backLink}</div>
    <Heading>{children}</Heading>
    <div />
  </Header>
);

export default SubNav;
