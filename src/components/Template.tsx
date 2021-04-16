import Menu from "./Menu";
import styled from "@emotion/styled";
import React from "react";

const ContentDiv = styled.div`
  position: relative;
  left: 0;
  transition: 0.3s all;
  padding: 30px;
  margin-left: 204px;
  @media (max-width: 720px) {
    margin-left: 10px;
  }
`;

const Template = ({ children }: any) => {
  return (
    <>
      <ContentDiv id="content">{children}</ContentDiv>;
      <Menu />
    </>
  );
};

export default Template;
