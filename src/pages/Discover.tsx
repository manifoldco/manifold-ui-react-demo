import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: grid;

  .marketplace {
    margin: 2rem;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  margin: 0;
  border-bottom: 1px solid #ddd;
`;

const Discover = () => {
  return (
    <Main>
      <Heading>Add a new service</Heading>
      <manifold-marketplace class="marketplace" />
    </Main>
  );
};

export default Discover;
