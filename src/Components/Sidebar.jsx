import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FcContacts } from "react-icons/fc";
import { SiSoundcharts } from "react-icons/si";

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
              <FcContacts className="icons" />
              <p className="text">Contacts</p>
            </li>
          </Link>
          <Link to="/cm" style={{ color: "inherit", textDecoration: "none" }}>
            <li
              className={`${
                location.pathname === "/cm" ? "active item" : "item"
              }`}
            >
              <SiSoundcharts className="icons" />
              <p className="text">Charts & Maps</p>
            </li>
          </Link>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
