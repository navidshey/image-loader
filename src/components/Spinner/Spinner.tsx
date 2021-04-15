import React from "react";
import spinner from "./spinner.gif";
import { SpinnerImage, SpinnerDiv } from "./../../constants/styles";
const Spinner = () => {
  return (
    <SpinnerDiv>
      <SpinnerImage src={spinner} className="spinner" alt="Loading ..." />
    </SpinnerDiv>
  );
};

export default Spinner;
