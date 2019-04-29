import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
  width: 100%;
`;

const Inner = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const Wrapper: React.FunctionComponent = ({ children }) => (
  <Outer>
    <Inner>{children}</Inner>
  </Outer>
);

export default Wrapper;
