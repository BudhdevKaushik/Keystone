import React from "react";
import Label from "./Label";
import { useField } from "formik";

const FormInput: React.FC<any> = ({ label, icon: Icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col w-full gap-2">
      <Label htmlFor={props.id || props.name}>{label}</Label>

      <div className="relative w-full">
        {Icon && (
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Icon className="w-4 h-4 text-gray-300" />
          </div>
        )}
        <input
          {...field}
          {...props}
          className="bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:border-primary w-full ps-10 p-2.5"
        />
      </div>

      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs mb-2">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormInput;
