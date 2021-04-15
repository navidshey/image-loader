import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store/reducers";
import { getCategories } from "../store/actions/categoryActions";
import { ICategory } from "../store/types";
import Error from "./Error";
import { MenuDiv, MenuLink, MenuUl } from "../constants/styles";

const Menu = () => {
  const state = useSelector((state: AppState) => state.category);

  const categoryDispatch = useDispatch();

  useEffect(() => {
    categoryDispatch(getCategories());
  }, []);

  return (
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
  );
};

export default Menu;
