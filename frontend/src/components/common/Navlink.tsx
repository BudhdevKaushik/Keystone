import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

const Navlink: React.FC<NavLinkProps> = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `py-2 px-[30%] text-sm ${
          isActive ? "text-primary bg-white" : "text-blackSecondary"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default Navlink;
