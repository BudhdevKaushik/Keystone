import React from "react";
import { MdNotifications } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <header className="col-start-3 col-end-12 border-b border-slate-200">
      <div className="h-full w-full">
        <div className="flex items-center justify-end px-8 h-full">
          <MdNotifications
            title="Notifications"
            className="text-gray text-[24px] cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
