import React from "react";
import { Outlet } from "react-router-dom";
import Screen from "../components/cards/Screen";

const AuthLayout: React.FC = () => {
  return (
    <Screen>
      <div className="w-full h-full flex">
        <div className="w-[70%] bg-lightPurple">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          consequuntur deserunt dignissimos amet possimus rerum blanditiis
          voluptate recusandae expedita accusamus, atque sit in laborum
          quisquam. Laudantium optio omnis placeat minus!
        </div>
        <div className="w-[30%]">
          <Outlet />
        </div>
      </div>
    </Screen>
  );
};

export default AuthLayout;
