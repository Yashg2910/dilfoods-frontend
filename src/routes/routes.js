import Home from "../components/Home/Home";
import Cart from "../components/Cart/Cart";
import StaffLogin from "../components/Staff/StaffLogin/StaffLogin";
import MenuItemsPage from "../components/Staff/MenuItemsPage/MenuItemsPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Orders from "../components/Orders/Orders";
import StaffOrders from "../components/Staff/StaffOrders/StaffOrders";

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
  },
  {
    path: "/orders",
    element: <Orders/>
  },
  {
    path: "/staff/orders",
    element: <StaffOrders/>
  }
];

export default routes;