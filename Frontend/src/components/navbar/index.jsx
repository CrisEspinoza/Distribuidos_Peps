import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
const Navbar = ({ ...props }) => {
  return (
    <div className="background-navbar">
      <div className="d-flex align-items-center container">
        <h3 className="col-4">Comisaria virtual</h3>
        <NavLink className="col-2" to="/">
          Home
        </NavLink>
        <NavLink className="col-2" to="/permission">
          Permission
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
