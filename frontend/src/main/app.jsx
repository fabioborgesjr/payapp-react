import React from "react";
import { HashRouter } from "react-router-dom";

import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import Footer from "../components/footer/footer";
import Messages from "../components/common/msg/Messages";

import Routes from "./routes";

export default props => (
  <HashRouter>
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Routes />
      <Footer />
      <Messages />
    </div>
  </HashRouter>
);
