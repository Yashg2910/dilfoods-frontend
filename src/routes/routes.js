
import Home from "../components/Home/Home";
import StaffLogin from "../components/Staff/StaffLogin/StaffLogin";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/staff/login",
    element: <StaffLogin/>
  }
];

export default routes;