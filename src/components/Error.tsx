import styled from "@emotion/styled";
import React from "react";

const ErrorDiv = styled.div`
    margin: auto,
    text-align: center,
    margin-top: 10%,
    color: red
  font-size: xxx-large
`;

const Error = (message: any) => {
  return <ErrorDiv>{message}</ErrorDiv>;
};
export default Error;
