import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  grid-area: navbar;
  display: grid;
  grid-template-areas: "left center right";
  justify-content: space-between;
  align-items: center;
  background: #ddd;
  padding: 1rem;
`;

const Avatar = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>🌮 TacoCloud</div>
      <Link to="/services">Services</Link>
      <div>
        <Link to="/">
          <Avatar src="https://fillmurray.com/100/150" alt="Bill Murray" />
        </Link>
        <Link to="/">⚙︎</Link>
      </div>
    </Nav>
  );
};

export default Navbar;
