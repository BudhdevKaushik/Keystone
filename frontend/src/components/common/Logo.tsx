import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="border-b border-slate-200 flex items-center justify-center">
      <div className="flex items-center justify-center w-[80%] gap-2">
        <h1 className="bg-primary text-white py-1 px-2 rounded-full text-xs font-bold">
          K
        </h1>
        <h2 className="text-xs text-primary font-bold">KEYSTONE</h2>
      </div>
    </div>
  );
};

export default Logo;
