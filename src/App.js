import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "./routes/routes";
import { useEffect } from 'react';
import { userSession } from './api/userSession';
import { useDispatch } from 'react-redux';
import {login} from './redux/userSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(routes);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = userSession.getUserToken();
    const user = userSession.getUser();
    if (user && token) {
      dispatch(login({user, token}));
    }
  })
  return (
    <div className="App">
      <ToastContainer />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;