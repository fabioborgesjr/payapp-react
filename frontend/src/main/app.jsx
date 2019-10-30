import React from "react";
import "../components/common/template/dependecies";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import Footer from "../components/footer/footer";
import Routes from "./routes";
import Messages from "../components/common/msg/Messages";

export default props => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
    <Messages />
  </div>
);
