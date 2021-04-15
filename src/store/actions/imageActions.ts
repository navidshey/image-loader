import axios from "axios";
import { Dispatch } from "react";
import { ActionTypeKeys, ActionTypes } from "../types";
import { apikey, ApiRoutes } from "../../constants/apiRouts";

export const search = (categoryId: string, limit = 10) => (
  dispatch: Dispatch<ActionTypes>
) => {
  dispatch(setLoading());
  axios.defaults.headers.common["x-api-key"] = apikey;

  axios
    .get(`${ApiRoutes.searchCats}?limit=${limit}&category_ids=${categoryId}`)
    .then((res) =>
      dispatch({
        type: ActionTypeKeys.SEARCH_CATS,
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
export const clearImages = () => {
  return {
    type: ActionTypeKeys.SEARCH_CLEAR,
  };
};

const setLoading = () => {
  return {
    type: ActionTypeKeys.LOADING,
  };
};
