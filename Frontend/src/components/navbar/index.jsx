import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
const Navbar = ({ ...props }) => {
  return (
    <div className="background-navbar">
      <nav className="container d-inline-flex align-items-center">
        <span className="col-4">Comisaria virtual</span>
        <NavLink className="col-2" to="/">
          Home
        </NavLink>
        <NavLink className="col-2" to="/permission">
          Permission
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
