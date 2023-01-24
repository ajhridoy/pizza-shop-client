import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../action/userAction";

const Navbar = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">
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
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="cart">
              Cart {cartState.cartItems.length}
            </Link>
          </li>
          {currentUser ? (
                <Dropdown>
                <Dropdown.Toggle variant="success"  id="dropdown-basic">
                  {currentUser.name}
                </Dropdown.Toggle>
          
                <Dropdown.Menu>
                  <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
