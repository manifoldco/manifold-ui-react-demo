import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  background: white;
  border-radius: 0.25rem;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.black20};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0);
  color: ${({ theme }) => theme.color.black50};
  display: flex;
  font-size: ${({ theme }) => theme.font.down1};
  padding: 0.75em 1em;
  text-align: center;
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
