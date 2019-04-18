import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  display: block;
  text-align: center;
  background: white;
  border: 1px solid lightgrey;
  border-radius: 0.25rem;
  padding: 0.75em 1em;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0);
  transition: box-shadow 100ms ease-in-out;

  &:hover,
  &:focus {
    text-decoration: none;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    background: #f8f8f8;
  }
`;

export default LinkButton;
