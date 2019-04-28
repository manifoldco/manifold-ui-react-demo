import React from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router-dom";
import ResourceHeader from "../components/ResourceHeader";
import Wrapper from "../components/Wrapper";
import LinkButton from "../components/LinkButton";

const Edit = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ManageResource = ({
  match: {
    params: { resourceName }
  }
}: RouteComponentProps<{ resourceName: string }>) => {
  return (
    <Wrapper>
      <ResourceHeader name={resourceName} />
      <Edit>
        <LinkButton to={`${resourceName}/edit`}>Edit</LinkButton>
      </Edit>
      <manifold-resource-credentials resource-name={resourceName} />
    </Wrapper>
  );
};

export default withRouter(ManageResource);
