import { DataArray, StringsArray } from "./components.types";

export type ExcludeRoutesType = (
  excludeRoutesArray: StringsArray,
  routes: DataArray
) => DataArray;

export type ButtonClassesType = (variant: string) => string;
