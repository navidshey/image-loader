import React from "react";
const Home = React.lazy(() => import("./components/Home"));
const Content = React.lazy(() => import("./components/Content"));
const NotFount = React.lazy(() => import("./../src/components/NotFound"));

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

export default routes;
