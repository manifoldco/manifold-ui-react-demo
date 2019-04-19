import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import styled from "styled-components";

import Wrapper from '../components/Wrapper';


const Heading = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.font.up1};
  font-weight: 700;
  padding: 1rem 2rem;
  margin-top: 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ddd;
`;


const Discover: React.FunctionComponent = () => {
  const [clicked, setClicked] = useState();

  useEffect(() => {
    function onClick({ detail }: CustomEvent): void {
      setClicked(detail.label);
    }

    document.addEventListener('manifold-serviceCard-click', onClick as EventListener);
    return () =>
      document.removeEventListener('manifold-serviceCard-click', onClick as EventListener);
  }, [clicked]);

  if (typeof clicked === 'string') {
    return <Redirect to={`/new/resource/?product=${clicked}`} />
  }

  return (
    <>
      <Heading>Add a new service</Heading>
      <Wrapper>
        <manifold-marketplace featured="piio" />
      </Wrapper>
    </>
  );
};

export default Discover;
