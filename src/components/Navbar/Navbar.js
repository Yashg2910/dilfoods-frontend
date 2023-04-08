import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          DilFoods
        </Link>
        <ul className="nav-menu">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;