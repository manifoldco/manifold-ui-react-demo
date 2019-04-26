import React, { useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { plus } from "@manifoldco/icons";
import LinkButton from "./LinkButton";
import Icon from "./Icon";

const EVENT_CLICK = "manifold-resourceList-click";

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

const ServicesList = styled.div`
  & manifold-data-resource-list {
    & ul {
      list-style: none;
      margin-top: 1rem;
      padding: 0;
    }

    & li {
      margin: 0;
      padding: 0;
    }

    & a {
      display: block;
      padding: 0.5rem 0.75rem;
      transition: background-color 150ms;
      text-decoration: none;

      &:focus,
      &:hover {
        background-color: ${({ theme }) => theme.color.black03};
      }
    }
  }
`;

const Sidebar: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const [next, setNext] = useState();

  useEffect(() => {
    const onClick = ({ detail: { resourceName } }: CustomEvent) => {
      setNext(resourceName);
      history.push(`/resources/${resourceName}`);
    };

    document.addEventListener(EVENT_CLICK, onClick as EventListener);
    return () =>
      document.removeEventListener(EVENT_CLICK, onClick as EventListener);
  }, [next, history]);

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
          <manifold-data-resource-list
            linkFormat="/resources/:resource"
            preserveEvent
          />
        </ServicesList>
      </Scroll>
    </Nav>
  );
};

export default withRouter(Sidebar);
