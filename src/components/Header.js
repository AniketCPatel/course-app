import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <Link className="nav-link" to="/">
          <header className="navbar-brand" style={{ cursor: "pointer" }}>
            Patel Course Store
          </header>
        </Link>
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/enquiryDetails">
                Enquiry List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
