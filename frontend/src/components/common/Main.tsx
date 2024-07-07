import React from "react";
import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <main className="col-start-3 col-end-13 row-start-2 row-end-13">
      <Outlet />
    </main>
  );
};

export default Main;
