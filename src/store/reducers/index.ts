import categoryReducer from "./categoryReducer";
import { combineReducers } from "redux";
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  image: imageReducer,
});
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
