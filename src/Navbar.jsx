import React from "react";

//stateless functional component

const Navbar = (props) => {
  return (
    <nav>
      <a className="navbar" href="#">
        Navbar
      </a>
      <span> currently {props.countersTotal} counters on page</span>
    </nav>
  );
};

export default Navbar;
