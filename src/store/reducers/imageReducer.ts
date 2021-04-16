import { ActionTypeKeys, IContent } from "store/types";
import { ActionTypes } from "store/types";
import { initialContent } from "store/types";

interface ImageState {
  loading: boolean;
  images: IContent[];
  error?: string;
}
const initialState: ImageState = {
  loading: false,
  images: [initialContent],
};

const imageReducer = (
  state: ImageState = initialState,
  action: ActionTypes
): ImageState => {
  switch (action.type) {
    case ActionTypeKeys.LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypeKeys.SEARCH_CATS:
      return {
        ...state,
        loading: false,
        images: state.images
          ? state.images.concat(action.payload as IContent[])
          : (action.payload as IContent[]),
      };
    case ActionTypeKeys.SEARCH_CLEAR:
      return {
        ...state,
        loading: false,
        images: [],
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

export default imageReducer;
