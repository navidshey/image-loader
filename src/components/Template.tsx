import React from "react";
import Menu from "./Menu";
import { ContentDiv } from "../constants/styles";

const Template = ({ children }: any) => {
  return (
    <>
      <ContentDiv id="content">{children}</ContentDiv>;
      <Menu />
    </>
  );
};

export default Template;
