import React from "react";
import styled from "styled-components";

const Header = styled.header`
  align-items: center;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 4rem auto min-content;
  padding-top: 1.5rem;
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

const Status = styled.div`
  margin-top: 0.25rem;
  margin-left: -0.25rem;
`;

interface ResourceHeaderProps {
  name: string;
}

const ResourceHeader: React.FunctionComponent<ResourceHeaderProps> = ({
  name
}) => (
  <Header>
    <Logo>
      <manifold-data-product-logo resource-name={name} />
    </Logo>
    <div>
      <Name>{name}</Name>
      <ProductName>
        <manifold-data-product-name resource-name={name} />
      </ProductName>
      <Status>
        <manifold-resource-status resource-name={name} />
      </Status>
    </div>
    <button>SSO</button>
  </Header>
);

export default ResourceHeader;
