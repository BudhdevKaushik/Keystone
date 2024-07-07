import React from "react";
import { LabelProps } from "../../types/components.types";

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label className="text-sm" {...props}>
      {children}
    </label>
  );
};

export default Label;
