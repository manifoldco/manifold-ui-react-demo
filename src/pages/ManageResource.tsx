import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import ResourceHeader from "../components/ResourceHeader";
import Wrapper from "../components/Wrapper";
import LinkButton from "../components/LinkButton";

const ManageResource = ({
  match: {
    params: { resourceName }
  }
}: RouteComponentProps<{ resourceName: string }>) => {
  return (
    <Wrapper>
      <ResourceHeader name={resourceName} />
      <manifold-resource-status resource-name={resourceName} />
      <manifold-resource-details resource-name={resourceName} />
      <manifold-resource-credentials resource-name={resourceName} />
      <div>
        <LinkButton to={`${resourceName}/edit`}>Edit</LinkButton>
      </div>
    </Wrapper>
  );
};

export default withRouter(ManageResource);
