import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import tacoCloudLogo from "../taco-cloud-logo.svg";

const Nav = styled.nav`
  grid-area: navbar;
  display: grid;
  grid-template-areas: "left right";
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 1rem ${({ theme }) => theme.color.black20};
  padding: 0.75rem 1.25rem;
  z-index: 1;
`;

const Brand = styled(Link)`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  align-items: center;

  &:hover {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  align-content: center;
  display: grid;
  font-size: ${({ theme }) => theme.font.u3};
  height: 1.75em;

  & img {
    height: 1.75rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Brand to="/">
        <Logo>
          <img src={tacoCloudLogo} alt="" />
        </Logo>
        TacoCloud
      </Brand>
    </Nav>
  );
};

export default Navbar;
