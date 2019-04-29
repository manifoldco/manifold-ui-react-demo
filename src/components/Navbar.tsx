import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { settings } from "@manifoldco/icons";

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
        <Logo>
          <span role="img" aria-label="taco">
            🌮
          </span>
        </Logo>
        TacoCloud
      </Brand>
      <RightNav>
        <Link to="/">
          <Avatar src="https://fillmurray.com/100/150" alt="Bill Murray" />
        </Link>
        <Link to="/">
          <Icon icon={settings} aria-label="Settings" />
        </Link>
      </RightNav>
    </Nav>
  );
};

export default Navbar;
