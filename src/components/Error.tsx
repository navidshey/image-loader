import React from "react";
import { ErrorDiv } from "../constants/styles";

const Error = (message: any) => {
  return <ErrorDiv>{message}</ErrorDiv>;
};
export default Error;
