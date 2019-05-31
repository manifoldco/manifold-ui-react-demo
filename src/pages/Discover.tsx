import React, { useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import SubNav from "../components/SubNav";
import Wrapper from "../components/Wrapper";

const EVENT_CLICK = "manifold-marketplace-click";

const Marketplace = styled.div`
  margin-top: 1.5rem;
`;

const Discover: React.FunctionComponent<RouteComponentProps> = ({
  history
}) => {
  const [next, setNext] = useState();

  useEffect(() => {
    const onClick = ({ detail }: CustomEvent) => {
      setNext(detail.productLabel);
      history.push(`/new/resource/?product=${detail.productLabel}`);
    };

    document.addEventListener(EVENT_CLICK, onClick as EventListener);
    return () =>
      document.removeEventListener(EVENT_CLICK, onClick as EventListener);
  }, [next, history]);

  return (
    <>
      <SubNav>Add a new service</SubNav>
      <Wrapper>
        <Marketplace>
          <manifold-marketplace
            featured="piio"
            product-link-format="/new/resource/?product=:product"
            preserve-event
          />
        </Marketplace>
      </Wrapper>
    </>
  );
};

export default withRouter(Discover);
