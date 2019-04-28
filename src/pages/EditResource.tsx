import React from "react";
import styled from "styled-components";
import { RouteComponentProps, Link } from "react-router-dom";
import LinkButton from "../components/LinkButton";
import Icon from "../components/Icon";
import { x, check } from "@manifoldco/icons";

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
`;

export default function EditResource({
  match: {
    params: { resourceName }
  }
}: RouteComponentProps<{ resourceName: string }>) {
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
            <manifold-plan-selector resource-name={resourceName} />
          </ModalBody>
          <Footer>
            <LinkButton to={`/resources/${resourceName}`}>
              <Icon icon={x} marginRight />
              Cancel
            </LinkButton>
            <LinkButton to={`/resources/${resourceName}`}>
              <Icon icon={check} marginRight />
              Save Changes
            </LinkButton>
          </Footer>
        </Modal>
      </ModalWrapper>
    </>
  );
}
