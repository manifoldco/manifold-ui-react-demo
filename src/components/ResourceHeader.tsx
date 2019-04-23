import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 1.5rem;
  align-items: center;
`;

const Logo = styled.div`
  img {
    height: 4rem;
    border-radius: 0.25rem;
  }
`;

const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 0.25em 0;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

interface ResourceHeaderProps {
  name: string;
}

const ResourceHeader: React.FunctionComponent<ResourceHeaderProps> = ({
  name
}) => (
  <Header>
    <Logo>
      <manifold-data-product-logo product-label="degraffdb-generators-stage" />
    </Logo>
    <div>
      <Name>{name}</Name>
      <ProductName>
        <manifold-data-product-name product-label="degraffdb-generators-stage" />
      </ProductName>
    </div>
    <button>SSO</button>
  </Header>
);

export default ResourceHeader;