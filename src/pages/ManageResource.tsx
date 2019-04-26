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
      <div>Provisioning</div>
      <manifold-resource-details resource-label={resourceName} />
    </Wrapper>
  );
};

export default withRouter(ManageResource);
