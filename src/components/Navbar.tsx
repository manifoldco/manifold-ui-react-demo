import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  grid-area: navbar;
  display: grid;
  grid-template-areas: "left center right";
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.color.black10};
  padding: 1rem;
`;

const Avatar = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  object-fit: cover;
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
  background: white;
  border-radius: 0.25rem;
  display: grid;
  height: 1.75em;
  justify-content: center;
  padding-left: 0.2em;
  width: 1.75em;
`;

const RightNav = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  align-items: center;

  a:hover {
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Brand to="/">
        <Logo role="img" aria-label="taco">
          🌮
        </Logo>
        TacoCloud
      </Brand>
      <Link to="/services">Services</Link>
      <RightNav>
        <Link to="/">
          <Avatar src="https://fillmurray.com/100/150" alt="Bill Murray" />
        </Link>
        <Link to="/">⚙︎</Link>
      </RightNav>
    </Nav>
  );
};

export default Navbar;
