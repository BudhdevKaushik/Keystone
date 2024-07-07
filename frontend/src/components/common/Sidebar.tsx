import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Sidebar: React.FC = () => {
  return (
    <aside className="col-start-1 col-end-3 row-start-1 row-end-13 bg-sidebarColor grid grid-rows-12">
      <Logo />
      <Navbar />
    </aside>
  );
};

export default Sidebar;
