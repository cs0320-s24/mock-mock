import "../../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { REPLFunction, REPLFunctionProps } from "./REPLInterface";

export const View: REPLFunction = (
  props: REPLFunctionProps
): string | string[][] => {
  if (props.args.length > 0) {
    return [["error", "Expected 0 args"]];
  }
  if (props.file.length > 0) {
    return props.file;
  } else {
    return [["error", "No Data Found"]];
  }
};
