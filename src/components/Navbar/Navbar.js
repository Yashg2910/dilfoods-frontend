import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../redux/userSlice";
import { userSession } from '../../api/userSession';

const Navbar = ({forStaff}) => {
  const cart = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function customerListItems() {
    return (
      <>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/orders" className="nav-link">
          My Orders
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/cart" className="nav-link">
          Cart {!!cart.items.length && <span className='cart-badge'>{cart.items.length}</span>}
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/staff/login" className="nav-link">
          Staff Login 
        </Link>
      </li>
      {userState?.user?.role === "STAFF" &&
        <li className="nav-item">
          <Link to="/staff/menuItems" className="nav-link">
            Dashboard
          </Link>
        </li>
      }
      </>
    )
  }

  function staffListItems() {
    return (
      <>
        <li className="nav-item">
          <Link to="/staff/login" className="nav-link">
            Menu Items
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/staff/login" className="nav-link">
            Orders
          </Link>
        </li>
      </>
    )
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          DilFoods
        </Link>
        <ul className="nav-menu">
          {!forStaff && customerListItems()}
          {forStaff && staffListItems()}
          {userState?.user &&
            <li className="nav-item" onClick={() => {dispatch(logout()); userSession.setUser(null)}}>
              <Link to="/staff/menuItems" className="nav-link">
                Logout
              </Link>
            </li>
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;