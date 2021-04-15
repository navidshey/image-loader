import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Template from "./components/Template";
import { Provider } from "react-redux";
import store from "./store/store";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <Provider store={store}>
      <div id="wrapper">
        <Template>
          <Suspense fallback={<Spinner />}>
            <Switch>
              {routes.map((route) => (
                <Route {...route} />
              ))}
            </Switch>
          </Suspense>
        </Template>
      </div>
    </Provider>
  );
}

export default App;
