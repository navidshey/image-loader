import React from "react";
import { BtnStyle } from "../constants/styles";

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
