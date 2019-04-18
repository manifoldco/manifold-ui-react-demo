import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";

const Nav = styled.nav`
  grid-area: sidebar;
  display: grid;
  align-content: start;
  min-width: 250px;
  padding: 2rem;
  background-image: linear-gradient(
      to bottom,
      rgba(240, 240, 240, 1),
      rgba(240, 240, 240, 0.75)
    ),
    url(./taco-pattern.jpg);
`;

const Heading = styled.h3`
  margin: 0;
  font-size: 0.75rem;
  color: grey;
  text-transform: uppercase;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 0.5em;
`;

const Sidebar = () => {
  return (
    <Nav>
      <Heading>Services</Heading>
      <ServicesList>
        <li>
          <Link to="/services">jawsdb-mysql-1</Link>
        </li>
        <li>
          <Link to="/services">️️messaging</Link>
        </li>
        <li>
          <Link to="/services">cool resource</Link>
        </li>
        <li>
          <Link to="/services">valence</Link>
        </li>
      </ServicesList>
      <LinkButton to="/"> {"+"} Add a resource</LinkButton>
    </Nav>
  );
};

export default Sidebar;
