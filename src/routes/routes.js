import Home from "../components/Home/Home";
import Cart from "../components/Cart/Cart";
import StaffLogin from "../components/Staff/StaffLogin/StaffLogin";
import MenuItemsPage from "../components/Staff/MenuItemsPage/MenuItemsPage";
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
  },
  {
    path: "/staff/menuItems",
    element: <MenuItemsPage/>
  }
];

export default routes;