import { ActionTypeKeys, ICategory, initialCategory } from "store/types";
import { ActionTypes } from "store/types";

interface CategoryState {
  loading: boolean;
  categories: ICategory[];
  error?: string;
}
const initialState: CategoryState = {
  loading: false,
  categories: [initialCategory],
};

const categoryReducer = (
  state: CategoryState = initialState,
  action: ActionTypes
): CategoryState => {
  switch (action.type) {
    case ActionTypeKeys.LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypeKeys.GET_CATEGORIES:
      return {
        ...state,
        loading: false,
        categories: action.payload as ICategory[],
      };
    case ActionTypeKeys.Error:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      };
    default:
      return state;
  }
};

export default categoryReducer;
