import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  }
];

export default routes;