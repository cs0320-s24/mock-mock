import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { REPLFunction, REPLFunctionProps } from "./REPLInterface";

export const View: REPLFunction = (props: REPLFunctionProps): string | string[][] => {
  return "Viewed!";
};
