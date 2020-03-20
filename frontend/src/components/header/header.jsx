import React from "react";
import Navbar from "../common/navbar/navbar";

export default props => (
  <header className="main-header">
    <a href="/#/" className="logo" data-toggle="offcanvas">
      <span className="logo-mini">
        <i className="fa fa-money"></i>
      </span>
      <span className="logo-lg">
        <i className="fa fa-money"></i>
        <b> My</b> Money
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <Navbar />
    </nav>
  </header>
);
