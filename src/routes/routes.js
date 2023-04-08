import Home from "../components/Home/Home";
import Cart from "../components/Cart/Cart";
import StaffLogin from "../components/Staff/StaffLogin/StaffLogin";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/staff/login",
    element: <StaffLogin/>
  }
];

export default routes;