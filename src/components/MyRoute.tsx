import { Route, Switch } from "react-router-dom";
import React from "react";
const Home = React.lazy(() => import("./Home"));
const Content = React.lazy(() => import("./Content"));
const NotFount = React.lazy(() => import("./NotFound"));

interface RouteType {
  exact: boolean;
  path: string;
  component: any;
}

const routes: RouteType[] = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/category/:name/:id",
    component: Content,
  },
  {
    exact: false,
    path: "*",
    component: NotFount,
  },
];

const MyRoute = () => {
  return (
    <Switch>
      {routes.map((route) => (
        // eslint-disable-next-line react/jsx-key
        <Route {...route} />
      ))}
    </Switch>
  );
};

export default MyRoute;
