import { useState, FC } from "react";
import Navlink from "./Navlink";
import { adminRoutes } from "../../utils/routes";

const Navbar: FC = () => {
  const [routes] = useState(adminRoutes);

  return (
    <nav className="py-8">
      <div className="flex flex-col">
        {routes.map(({ to, label }, idx) => (
          <Navlink to={to}>{label}</Navlink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
