import NotFount from "./components/NotFound";
import Home from "./components/Home";
import Content from "./components/Content";

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
