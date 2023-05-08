import React from "react";

import "./styles.css";

function Navbar() {
  return (
    <React.Fragment>
      <div className="container mx-auto bg-pink-900 shadow border px-8 py-5">
        <h2 className="font-bold text-3xl text-white">
          Contact Management Application
        </h2>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
