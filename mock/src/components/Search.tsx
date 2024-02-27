import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { REPLFunction, REPLFunctionProps } from "./REPLInterface";

export const Search: REPLFunction = (
  props: REPLFunctionProps
): string | string[][] => {
  return [
    ["row1col1", "row1col2", "row1col3"],
    ["row2col1", "row2col2", "row2col3"],
    ["row3col1", "row3col2", "row3col3"],
  ];
};
