import React, { useState, useEffect } from "react";
import ResourceHeader from "../components/ResourceHeader";
import Wrapper from "../components/Wrapper";

const BASE_URL = "https://api.marketplace.stage.manifold.co/v1";
const RESOURCE_ID = "268ak39rn9czavv1qd9m93t482gmm";

const ManageResource = () => {
  const [resource, setResource] = useState();

  useEffect(() => {
    if (!resource) {
      fetch(`${BASE_URL}/resources/${RESOURCE_ID}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("manifold_api_token")}`
        }
      })
        .then(response => response.json())
        .then(resource => {
          setResource(resource);
        });
    }
  }, [resource]);
  console.log("resource", resource);
  if (!resource) return <div>Loading...</div>;

  const { name } = resource.body;
  return (
    <Wrapper>
      <ResourceHeader name={name} />
      <div>Provisioning</div>
      <manifold-resource-details resource-id="268ak39rn9czavv1qd9m93t482gmm" />
    </Wrapper>
  );
};

export default ManageResource;
