import React from "react";
import { Link } from "react-router-dom";
import {
  ContainerNotFound,
  ErrorContainer,
} from "../Components/styledComponents";

const NotFound = () => {
  return (
    <ContainerNotFound>
      <ErrorContainer>
        <h1>404</h1>
        <h2>Error: 404 page not found</h2>
        <Link to="/home">Back Home</Link>
      </ErrorContainer>
    </ContainerNotFound>
  );
};

export default NotFound;
