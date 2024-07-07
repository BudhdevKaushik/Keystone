import { FC } from "react";
import { Children } from "../../types/components.types";

const Screen: FC<Children> = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll m-0 p-0">
      {children}
    </div>
  );
};

export default Screen;
