import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavigationBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MyAuthApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            {!user && (
              <>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
              </>
            )}
            {user && (
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
