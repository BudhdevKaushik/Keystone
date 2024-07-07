import React from "react";
import { Outlet } from "react-router-dom";
import Screen from "../components/cards/Screen";

const AuthLayout: React.FC = () => {
  return (
    <Screen>
      <div className="w-full h-full flex">
        <div className="w-[70%] flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <h1>Welcome to</h1>
            <p className="text-primary uppercase font-bold">Keystone</p>
          </div>
          <img className="w-[500px]" src="/images/auth.svg" alt="" />
        </div>
        <div className="w-[30%]">
          <Outlet />
        </div>
      </div>
    </Screen>
  );
};

export default AuthLayout;
