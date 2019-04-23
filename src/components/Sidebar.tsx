import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { plus } from "@manifoldco/icons";
import LinkButton from "./LinkButton";
import Icon from "./Icon";

const Nav = styled.nav`
  grid-area: sidebar;
  display: grid;
  align-content: start;
  min-width: 250px;
  padding: 2rem;
  position: relative;
  background-attachment: fixed;
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

const Scroll = styled.div`
  position: sticky;
  top: 1.5rem;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 0.75em;
`;

const Sidebar = () => {
  return (
    <Nav>
      <Scroll>
        <LinkButton to="/">
          <Icon icon={plus} marginRight />
          Add a new service
        </LinkButton>
        <br />
        <Heading>Services</Heading>
        <ServicesList>
          <li>
            <Link to="/resources/1">jawsdb-mysql-1</Link>
          </li>
          <li>
            <Link to="/resources/2">️️messaging</Link>
          </li>
          <li>
            <Link to="/resources/3">cool resource</Link>
          </li>
          <li>
            <Link to="/resources/4">valence</Link>
          </li>
        </ServicesList>
      </Scroll>
    </Nav>
  );
};

export default Sidebar;
