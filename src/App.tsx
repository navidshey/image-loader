import { Suspense } from "react";
import Template from "components/Template";
import { Provider } from "react-redux";
import store from "store/store";
import Spinner from "components/Spinner/Spinner";
import MyRoute from "components/MyRoute";
import React from "react";

const App = () => {
  return (
    <Provider store={store}>
      <div id="wrapper">
        <Template>
          <Suspense fallback={<Spinner />}>
            <MyRoute></MyRoute>
          </Suspense>
        </Template>
      </div>
    </Provider>
  );
};

export default App;
