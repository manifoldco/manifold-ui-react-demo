import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  grid-gap: 1rem;
  align-items: center;

  &:hover {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  align-content: center;
  background: ${({ theme }) => theme.color.black05};
  border-radius: 0.25rem;
  display: grid;
  font-size: ${({ theme }) => theme.font.u3};
  height: 1.75em;
  justify-content: center;
  width: 1.75em;
`;

const Navbar = () => {
  return (
    <Nav>
      <Brand to="/">
        <Logo>
          <span role="img" aria-label="taco">
            🌮
          </span>
        </Logo>
        TacoCloud
      </Brand>
    </Nav>
  );
};

export default Navbar;
