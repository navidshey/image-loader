import axios from "axios";
import { Dispatch } from "react";
import { ActionTypeKeys, ActionTypes } from "store/types";
import { ApiRoutes } from "constants/apiRouts";

export const getCategories = () => (dispatch: Dispatch<ActionTypes>) => {
  dispatch(setLoading());
  axios.defaults.headers.common["x-api-key"] = process.env.REACT_APP_API_KEY;
  axios
    .get(ApiRoutes.getGategories)
    .then((res) =>
      dispatch({
        type: ActionTypeKeys.GET_CATEGORIES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypeKeys.Error,
        payload: "some thing wrong !",
      })
    );
};

const setLoading = () => {
  return {
    type: ActionTypeKeys.LOADING,
  };
};
