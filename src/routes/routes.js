import Home from "../components/Home/Home";
import Cart from "../components/Cart/Cart";
import Login from "../components/Login/Login";
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
    path: "/login",
    element: <Login/>
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