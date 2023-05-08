import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="bg-pink-900 px-5 py-3 sidebar-container">
        <ul className="side-heads">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <li
              className={`${
                location.pathname === "/" ? "active item" : "item"
              }`}
            >
              Contacts
            </li>
          </Link>
          <Link to="/cm" style={{ color: "inherit", textDecoration: "none" }}>
            <li
              className={`${
                location.pathname === "/cm" ? "active item" : "item"
              }`}
            >
              Charts & Maps
            </li>
          </Link>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
