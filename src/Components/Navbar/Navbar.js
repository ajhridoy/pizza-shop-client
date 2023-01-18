import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartState = useSelector(state => state.cartReducer)
  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
      <Link className="navbar-brand" to='/'>
        Pizza Tong
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/'>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='cart'>
              Cart {cartState.cartItems.length}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
