import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import ResourceHeader from "../components/ResourceHeader";
import Wrapper from "../components/Wrapper";

const ManageResource = ({
  match: {
    params: { resourceName }
  }
}: RouteComponentProps<{ resourceName: string }>) => {
  return (
    <Wrapper>
      <ResourceHeader name={resourceName} />
      <manifold-resource-status resource-name={resourceName} />
      <manifold-resource-credentials resource-name={resourceName} />
      <manifold-resource-details resource-name={resourceName} />
    </Wrapper>
  );
};

export default withRouter(ManageResource);
