import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Template from "./components/Template";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div id="wrapper">
        <Template>
          <Switch>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </Template>
      </div>
    </Provider>
  );
}

export default App;
