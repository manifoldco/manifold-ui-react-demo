import React from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { edit } from "@manifoldco/icons";

import ResourceHeader from "../components/ResourceHeader";
import Wrapper from "../components/Wrapper";
import LinkButton from "../components/LinkButton";
import Icon from "../components/Icon";

const Edit = styled.div`
  display: grid;
  justify-content: end;
`;

const Divider = styled.hr`
  border: none;
  background-color: ${({ theme }) => theme.color.black20};
  height: 1px;
  width: 100%;
`;

const ManageResource = ({
  match: {
    params: { resourceName }
  }
}: RouteComponentProps<{ resourceName: string }>) => {
  return (
    <manifold-resource-container resource-name={resourceName}>
      <Wrapper>
        <ResourceHeader name={resourceName} />
        <manifold-resource-status />
        <manifold-resource-details resource-name={resourceName} />
        <Edit>
          <LinkButton to={`${resourceName}/edit`}>
            <Icon icon={edit} marginRight />
            Edit plan
          </LinkButton>
        </Edit>
        <Divider />
        <manifold-resource-credentials resource-name={resourceName} />
      </Wrapper>
    </manifold-resource-container>
  );
};

export default withRouter(ManageResource);
