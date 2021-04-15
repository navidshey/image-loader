import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

const middleware = [thunk];
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), devToolsEnhancer({}))
);

export default store;
