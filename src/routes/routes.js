import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  }
];

export default routes;