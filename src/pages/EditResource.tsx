import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RouteComponentProps, Link } from "react-router-dom";
import LinkButton from "../components/LinkButton";
import Icon from "../components/Icon";
import { x, check } from "@manifoldco/icons";

// Events
const EVENT_CHANGE = "manifold-planSelector-change";
const EVENT_SUCCESS = "manifold-manageButton-success";
const EVENT_ERROR = "manifold-manageButton-error";

// 💅
const ModalBackground = styled(Link)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.75);
  z-index: 2;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  display: grid;
  pointer-events: none;
  overflow: auto;
`;

const Modal = styled.div`
  justify-self: center;
  align-self: center;
  margin: 2rem;
  background: white;
  border-radius: 0.5rem;
  min-width: 200px;
  width: 1000px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  pointer-events: initial;
`;

const Heading = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0;
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const ModalBody = styled.main`
  padding: 1rem;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.color.offWhite};
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  & manifold-data-manage-button button {
    background: white;
    border-radius: 0.25rem;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.color.black20};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0);
    color: ${({ theme }) => theme.color.black50};
    display: flex;
    font-size: 1em;
    padding: 0.75em 1em;
    text-align: center;
    transition: box-shadow 100ms ease-in-out;

    &:hover,
    &:focus {
      text-decoration: none;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    &:active {
      background: #f8f8f8;
    }
  }
`;

export default function EditResource({
  match: {
    params: { resourceName }
  }
}: RouteComponentProps<{ resourceName: string }>) {
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  // Plan update
  useEffect(() => {
    function change({ detail: { planId, features } }: CustomEvent): void {
      const manageButton = document.querySelector(
        "manifold-data-manage-button"
      );
      if (!manageButton) return;
      if (features) manageButton.features = features;
      manageButton.planId = planId;
    }

    const success = ({ detail: { resourceName, message } }: CustomEvent) => {
      setSuccessMessage(message);
    };
    const error = ({ detail: { message } }: CustomEvent) => {
      setErrorMessage(message);
    };

    document.addEventListener(EVENT_CHANGE, change as EventListener);
    document.addEventListener(EVENT_SUCCESS, success as EventListener);
    document.addEventListener(EVENT_ERROR, error as EventListener);

    return () => {
      document.removeEventListener(EVENT_CHANGE, change as EventListener);
      document.removeEventListener(EVENT_SUCCESS, success as EventListener);
      document.removeEventListener(EVENT_ERROR, error as EventListener);
    };
  }, []);

  return (
    <>
      <ModalBackground to={`/resources/${resourceName}`} />
      <ModalWrapper>
        <Modal>
          <ModalHeader>
            <Heading>Update plan for {resourceName}</Heading>
            <Link to={`/resources/${resourceName}`}>
              <Icon icon={x} />
            </Link>
          </ModalHeader>
          <ModalBody>
            <manifold-plan-selector resource-name={resourceName} hide-cta />
            {successMessage && (
              <manifold-toast alert-type="success">
                {successMessage}
              </manifold-toast>
            )}
            {errorMessage && (
              <manifold-toast alert-type="error">{errorMessage}</manifold-toast>
            )}
          </ModalBody>
          <Footer>
            <LinkButton to={`/resources/${resourceName}`}>
              <Icon icon={x} marginRight />
              Cancel
            </LinkButton>
            <manifold-data-manage-button resource-name={resourceName}>
              <Icon icon={check} marginRight />
              Save Changes
            </manifold-data-manage-button>
          </Footer>
        </Modal>
      </ModalWrapper>
    </>
  );
}
