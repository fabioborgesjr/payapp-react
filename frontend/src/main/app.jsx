import React from "react";

import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import Footer from "../components/footer/footer";
import Messages from "../components/common/msg/Messages";

export default props => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">{props.children}</div>
    <Footer />
    <Messages />
  </div>
);
