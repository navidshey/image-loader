import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const mainColor = "#1c3a58";

export const ContentDiv = styled.div`
  position: relative;
  left: 0;
  transition: 0.3s all;
  padding: 30px;
  margin-left: 240px;
`;

export const ErrorDiv = styled.div`
    margin: auto,
    text-align: center,
    margin-top: 10%,
    color: red
  font-size: xxx-large
`;

export const MenuDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  background-color: ${mainColor};
  transition: 0.3s left;
`;
export const MenuUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 15px 20px;
  color: #fff;
  &:hover {
    background-color: #25609e;
  }
`;

export const BtnStyle = styled.button`
  text-align: center;
  width: 100%;
  margin-top: 20px;
  height: 40px;
  &:hover {
    background-color: #9fc3e8;
  }
`;

export const ColumnDiv = styled.div`
  width: 100%;
`;

export const RowDiv = styled.div`
  width: 100%;
  padding: 5px;
  float: right;
  text-align: center;
`;

export const Image = styled.img`
  width: 22%;
  min-height: 250px;
  text-align: center;
  padding: 25px;
  margin: 9px;
  vertical-align: middle;
  background: ${mainColor};
`;

export const SpinnerDiv = styled.div`
  margin: 0% auto 0 auto;
  height: 100%;
  width: auto;
  text-align: center;
`;

export const SpinnerImage = styled.img`
  width: "500px";
  margin: "auto";
  display: "block";
`;
