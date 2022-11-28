import React from "react";
import { Navbar, NavLink } from "react-router-dom";
import {useSelector} from "react-redux";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Takkies
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            data-bs-control="navbarSupportedContent"
            arial-expanded="false"
            aria-label="toggle navigation"
          ></button>
        </div>
      </nav>
    </div>
  );
}
