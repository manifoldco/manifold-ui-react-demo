import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  grid-area: sidebar;
  display: grid;
  align-content: start;
  min-width: 250px;
  padding: 2rem;
  background: #eee;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 0.5em;
`;

const Sidebar = () => {
  return (
    <Nav>
      <h3>Services</h3>
      <ServicesList>
        <li>
          <Link to="/services">🔶 jawsdb-mysql-1</Link>
        </li>
        <li>
          <Link to="/services">️️🔶 messaging</Link>
        </li>
        <li>
          <Link to="/services">🔶 cool resource</Link>
        </li>
        <li>
          <Link to="/services">🔶 valence</Link>
        </li>
      </ServicesList>
    </Nav>
  );
};

export default Sidebar;
