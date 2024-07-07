import React from "react";
import { Children } from "../../types/components.types";

const FieldCard: React.FC<Children> = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};

export default FieldCard;
