/* eslint-disable react/react-in-jsx-scope */
import styled from "@emotion/styled";
import React from "react";

const BtnStyle = styled.button`
  text-align: center;
  width: 100%;
  margin-top: 20px;
  height: 40px;
  &:hover {
    background-color: #9fc3e8;
  }
`;

export interface ButtonProps {
  value: string;
  name: string;
  isLoading: boolean;
  onClick: () => void;
}

const Button = ({ value, onClick, isLoading, name }: ButtonProps) => {
  return (
    <BtnStyle name={name} disabled={isLoading} onClick={onClick}>
      {value}
    </BtnStyle>
  );
};

export default Button;
