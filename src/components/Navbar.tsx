import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  grid-area: navbar;
  display: grid;
  grid-template-areas: "left center right";
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

const Brand = styled(Link)`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  align-items: center;
  font-size: 1em;

  &:hover {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  align-content: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  display: grid;
  height: 1.75em;
  justify-content: center;
  padding-left: 0.2em;
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
      <Link to="/services">Services</Link>
    </Nav>
  );
};

export default Navbar;
