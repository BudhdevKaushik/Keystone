import { ButtonClassesType, ExcludeRoutesType } from "../types/functions.types";

export const excludeRoutes: ExcludeRoutesType = (allRoutes, excludes) => {
  return [];
};

export const buttonClasses: ButtonClassesType = (variant) => {
  switch (variant) {
    case "primary":
      break;
    case "success":
      break;
    case "":
      break;

    default:
      break;
  }
  return "";
};
