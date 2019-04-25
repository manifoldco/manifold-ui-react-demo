import React, { useState, useEffect } from "react";
import {
  Link,
  Redirect,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import styled from "styled-components";
import { arrow_left } from "@manifoldco/icons";

import Icon from "../components/Icon";
import SubNav from "../components/SubNav";
import Wrapper from "../components/Wrapper";

// State
const READY = "READY";
const LOADING = "LOADING";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

// Events
const EVENT_INIT = "manifold-planSelector-load";
const EVENT_CHANGE = "manifold-planSelector-change";
const EVENT_CLICK = "manifold-provisionButton-click";
const EVENT_SUCCESS = "manifold-provisionButton-success";
const EVENT_ERROR = "manifold-provisionButton-error";

// 💅

const Deets = styled.section`
  margin-bottom: 4rem;
  padding-top: 1.5rem;
`;

const Form = styled.form<{ status: string }>`
  padding-left: calc(33.333% + 1.5rem);
  padding-bottom: 3rem;

  & manifold-data-provision-button {
    display: grid;
    grid-template-columns: auto min-content;
    grid-gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  & input {
    appearance: none;
    background: white;
    border-radius: ${({ theme }) => theme.radius.default};
    border: 1px solid ${({ theme }) => theme.color.black20};
    font-size: 1em;
    font-size: 1em;
    font-variant-ligatures: none;
    height: 2.5rem;
    padding: 0.5rem 0.75rem;
    transition: border-color 150ms linear;
    width: 100%;

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.color.black40};
    }

    &:focus {
      box-shadow: 0 0 0 2px rgba(87, 100, 198, 0.15);
      outline: 0;
    }

    &:not(output):-moz-ui-invalid {
      box-shadow: none;
    }

    &::-webkit-input-placeholder {
      color: ${({ theme }) => theme.color.black60};
    }
  }

  & button {
    align-items: center;
    appearance: none;
    background-color: #0069ff;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    font-size: 1em;
    margin: 0;
    opacity: ${({ status }) => (status === LOADING ? 0.5 : 1)};
    padding: 0.5rem 1rem;
    transition: background-color 150ms linear, filter 150ms linear,
      opacity 300ms linear;
    white-space: nowrap;

    &:focus,
    &:hover {
      filter: saturate(150%) brightness(130%);
    }
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.color.black40};
  display: block;
  font-size: ${({ theme }) => theme.font.d2};
  font-weight: 500;
  letter-spacing: 0.0625em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const PlanSelector = styled.div`
  padding-bottom: 2rem;
`;

const NewResource: React.FunctionComponent<RouteComponentProps> = ({
  location: { search }
}) => {
  const [errorMessage, setErrorMessage] = useState();
  const [resourceId, setResourceId] = useState();
  const [status, setStatus] = useState(READY);
  const [successMessage, setSuccessMessage] = useState();

  // Plan update
  useEffect(() => {
    function change({
      detail: { planId, features, regionId }
    }: CustomEvent): void {
      const provisionButton = document.querySelector(
        "manifold-data-provision-button"
      );
      if (!provisionButton) return;
      provisionButton.features = features;
      provisionButton.planId = planId;
      provisionButton.regionId = regionId;
      if (process.env.REACT_APP_MANIFOLD_USER_ID)
        provisionButton.ownerId = process.env.REACT_APP_MANIFOLD_USER_ID;
    }

    const provision = () => setStatus(LOADING);
    const success = ({ detail: { resourceId, message } }: CustomEvent) => {
      setStatus(SUCCESS);
      setResourceId(resourceId);
      setSuccessMessage(message);
    };
    const error = ({ detail: { message } }: CustomEvent) => {
      setStatus(ERROR);
      setErrorMessage(message);
    };

    document.addEventListener(EVENT_INIT, change as EventListener);
    document.addEventListener(EVENT_CHANGE, change as EventListener);
    document.addEventListener(EVENT_CLICK, provision as EventListener);
    document.addEventListener(EVENT_SUCCESS, success as EventListener);
    document.addEventListener(EVENT_ERROR, error as EventListener);

    return () => {
      document.removeEventListener(EVENT_INIT, change as EventListener);
      document.removeEventListener(EVENT_CHANGE, change as EventListener);
      document.removeEventListener(EVENT_CLICK, provision as EventListener);
      document.removeEventListener(EVENT_SUCCESS, success as EventListener);
      document.removeEventListener(EVENT_ERROR, error as EventListener);
    };
  }, []);

  const params = new URLSearchParams(search);
  const product = params.get("product");

  if (status === SUCCESS && resourceId) {
    return <Redirect to={`/resources/${resourceId}`} push={true} />;
  }

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
          <manifold-plan-selector hide-cta product-label={product} />
        </PlanSelector>
        <Form status={status} onSubmit={e => e.preventDefault()}>
          <Label htmlFor="provision-resource">Resource Name</Label>
          <manifold-data-provision-button
            product-label={product}
            inputId="provision-resource"
          >
            <span role="img" aria-label="rocket">
              🚀
            </span>
            &nbsp;Get&nbsp;
            <manifold-data-product-name product-label={product} />
          </manifold-data-provision-button>
          {status === ERROR && (
            <manifold-toast alert-type="error">{errorMessage}</manifold-toast>
          )}
          {status === SUCCESS && (
            <manifold-toast alert-type="success">
              {successMessage}
            </manifold-toast>
          )}
        </Form>
      </Wrapper>
    </>
  );
};

export default withRouter(NewResource);
