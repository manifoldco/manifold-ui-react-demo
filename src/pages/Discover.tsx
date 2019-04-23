import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import SubNav from "../components/SubNav";
import Wrapper from "../components/Wrapper";

const Marketplace = styled.div`
  margin-top: 1.5rem;
`;

const Discover: React.FunctionComponent = () => {
  const [clicked, setClicked] = useState();

  useEffect(() => {
    function onClick({ detail }: CustomEvent): void {
      setClicked(detail.productLabel);
    }

    document.addEventListener(
      "manifold-marketplace-click",
      onClick as EventListener
    );
    return () =>
      document.removeEventListener(
        "manifold-marketplace-click",
        onClick as EventListener
      );
  }, [clicked]);

  if (typeof clicked === "string") {
    return <Redirect to={`/new/resource/?product=${clicked}`} push={true} />;
  }

  return (
    <>
      <SubNav>Add a new service</SubNav>
      <Wrapper>
        <Marketplace>
          <manifold-marketplace featured="piio" linkFormat="/new/resource" />
        </Marketplace>
      </Wrapper>
    </>
  );
};

export default Discover;
