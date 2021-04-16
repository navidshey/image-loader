import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "store/reducers";
import { getCategories } from "store/actions/categoryActions";
import { ICategory } from "store/types";
import Error from "./Error";
import styled from "@emotion/styled";

import { mainColor } from "constants/styles";
import React from "react";

const Menu = () => {
  const state = useSelector((state: AppState) => state.category);
  const [open, setOpen] = useState("none !important");
  const [leftdist, setLeftDist] = useState("10px");
  const categoryDispatch = useDispatch();

  const MenuDiv = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 240px;
    background-color: ${mainColor};
    transition: 0.3s left;
    @media (max-width: 700px) {
      display: ${open};
      opacity: 0.8;
    }
  `;
  const MenuBtn = styled.button`
    display: none;
    @media (max-width: 720px) {
      display: block;
      top: 10px;
      left: ${leftdist};
      position: fixed;
      height: 35px;
      background-color: ${mainColor};
      color: white;
    }
  `;
  const MenuUl = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
  `;
  const MenuLink = styled(Link)`
    text-decoration: none;
    display: block;
    padding: 15px 20px;
    color: #fff;
    &:hover {
      background-color: #25609e;
    }
  `;

  useEffect(() => {
    categoryDispatch(getCategories());
  }, []);

  const toggleMenu = () => {
    if (open === "none !important") {
      setOpen("block !important");
      setLeftDist("239px");
    } else {
      setOpen("none !important");
      setLeftDist("10px");
    }
    // document.getElementById("menu").style.display = "block";
    // document.getElementById("menuBtn").style.left = "500px";
  };

  return (
    <>
      <MenuBtn id="menuBtn" onClick={toggleMenu}>
        categories
      </MenuBtn>
      <MenuDiv id="menu">
        {state.error ? (
          <Error message={state.error}></Error>
        ) : (
          <MenuUl>
            {state.categories.map((category: ICategory) => (
              <li key={category.id}>
                <MenuLink to={`/category/${category.name}/${category.id}`}>
                  {category.name}
                </MenuLink>
              </li>
            ))}
          </MenuUl>
        )}
      </MenuDiv>
    </>
  );
};

export default Menu;
