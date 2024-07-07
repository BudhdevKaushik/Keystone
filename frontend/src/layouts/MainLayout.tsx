import React from "react";
import Main from "../components/common/Main";
import Screen from "../components/cards/Screen";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

const MainLayout: React.FC = () => {
  return (
    <Screen>
      <div className="h-full w-full grid grid-cols-11 grid-rows-12">
        <Main />
        <Header />
        <Sidebar />
      </div>
    </Screen>
  );
};

export default MainLayout;
