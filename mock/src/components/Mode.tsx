import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { REPLFunction, REPLFunctionProps } from "./REPLInterface";

export const Mode: REPLFunction = (
  props: REPLFunctionProps
): string | string[][] => {

  //if user wants verbose, set mode constant to true
  if ("verbose" == props.args[0]) {
    props.setMode(true);
    return "Mode is now verbose";

    //if user wants brief, set mode constant to false
  } else if ("brief" == props.args[0]) {
    props.setMode(false);
    return "Mode is now brief";
  }

  return "Mode not found. Available modes are: 'verbose' and 'brief'";
};
