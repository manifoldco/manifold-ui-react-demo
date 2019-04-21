import React from "react";
import styled from "styled-components";
import { chevron_down } from "@manifoldco/icons";

import { base64 } from "./Icon";

const Wrapper = styled.div`
  position: relative;

  &::after {
    background-image: url("${base64(chevron_down)}");
    background-size: contain;
    background-repeat: no-repeat;
    content: "";
    height: 1.5rem;
    opacity: 0.5;
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5rem;
  }
`;

const Select = styled.select`
  appearance: none;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.black10};
  font-size: ${({ theme }) => theme.font.up1};
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 2.5rem;
  padding-top: 0.5rem;
  transition: border-color 150ms linear;
  width: 100%;

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.color.blue};
  }
`;

const Dropdown: React.FunctionComponent = ({ children, ...rest }) => (
  <Wrapper>
    <Select {...rest}>{children}</Select>
  </Wrapper>
);

export default Dropdown;
