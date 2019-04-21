import React, { useState, useEffect } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { arrow_right, arrow_left, check_circle } from "@manifoldco/icons";

import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Icon from "../components/Icon";
import SubNav from "../components/SubNav";
import Wrapper from "../components/Wrapper";

const Confirmation = styled.menu`
  display: grid;
  grid-gap: 2rem;
  padding-left: 33.3333%;
  text-align: right;
`;

const Deets = styled.section`
  margin-bottom: 4rem;
  padding-top: 1.5rem;
`;

const PlanSelector = styled.div`
  padding-bottom: 2rem;
`;

const Status = styled.div`
  background-color: ${({ theme }) => theme.color.black7};
  border: 1px solid ${({ theme }) => theme.color.black10};
  border-radius: 0.25rem;
  font-family: monospace;
  font-size: ${({ theme }) => theme.font.down1};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 2rem;
`;

const StatusWindow = styled.div`
  min-height: 8rem;
  margin-top: 2rem;
  padding-bottom: 2rem;
`;

const Success = styled.div`
  background-color: rgba(49, 186, 162, 0.15);
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.green};
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const READY = "READY";
const LOADING = "LOADING";
const SUCCESS = "SUCCESS";

const NewResource: React.FunctionComponent<RouteComponentProps> = ({
  location: { search }
}) => {
  const [planID, setPlanID] = useState();
  const [features, setFeatures] = useState({});
  const [status, setStatus] = useState(READY);

  useEffect(() => {
    function planChanged({ detail }: CustomEvent): void {
      setPlanID(detail.id);
      setFeatures(detail.features);
    }

    document.addEventListener(
      "manifold-planUpdated",
      planChanged as EventListener
    );
    return () =>
      document.removeEventListener(
        "manifold-planUpdated",
        planChanged as EventListener
      );
  }, [planID, features]);

  useEffect(() => {
    if (status === LOADING) {
      setTimeout(() => setStatus(SUCCESS), 5000);
    }
  }, [status]);

  const params = new URLSearchParams(search);
  const product = params.get("product");

  return (
    <>
      <SubNav
        backLink={
          <Link to="/">
            <Icon icon={arrow_left} marginRight />
            Back to services
          </Link>
        }
      >
        Add a new <manifold-data-product-name product-label={product} />{" "}
        resource
      </SubNav>
      <Wrapper>
        <Deets>
          <manifold-product hide-cta product-label={product} />
        </Deets>
        <PlanSelector>
          <manifold-plan-selector product-label={product} />
        </PlanSelector>
        <Confirmation>
          <Dropdown>
            <option value="us-east-1">US East (N. Virginia)</option>
            <option value="us-east-2">US East (Ohio)</option>
            <option value="us-west-1">US West (N. California)</option>
            <option value="us-west-2">US West (Oregon)</option>
            <option value="ap-south-1">Asia Pacific (Mumbai)</option>
            <option value="ap-northeast-1">Asia Pacific (Tokyo)</option>
            <option value="ap-northeast-2">Asia Pacific (Seoul)</option>
            <option value="ap-northeast-3">Asia Pacific (Osaka-Local)*)</option>
            <option value="ap-southeast-1">Asia Pacific (Singapore)</option>
            <option value="ap-southeast-2">Asia Pacific (Sydney)</option>
            <option value="ca-central-1">Canada (Central)</option>
            <option value="cn-north-1">China (Beijing)</option>
            <option value="cn-northwest-1">China (Ningxia)</option>
            <option value="eu-central-1">EU (Frankfurt)</option>
            <option value="eu-west-1">EU (Ireland)</option>
            <option value="eu-west-2">EU (London)</option>
            <option value="eu-west-3">EU (Paris)</option>
            <option value="eu-north-1">EU (Stockholm)</option>
            <option value="sa-east-1">South America (São Paulo)</option>
          </Dropdown>
          <div>
            <Button onClick={() => setStatus(LOADING)}>
              Purchase&nbsp;
              <manifold-data-product-name product-label={product} />
              <Icon icon={arrow_right} marginLeft />
            </Button>
          </div>
        </Confirmation>
        <StatusWindow>
          {status === LOADING && (
            <Status>
              🚀 Provisioning new resource…
              <br />
              planID: {planID}
              <br />
              features: {JSON.stringify(features)}
            </Status>
          )}
          {status === SUCCESS && (
            <Success>
              <Icon icon={check_circle} marginRight />
              Finished provisioning!
            </Success>
          )}
        </StatusWindow>
      </Wrapper>
    </>
  );
};

export default withRouter(NewResource);
