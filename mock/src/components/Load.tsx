import { MockCSVFiles } from "../mock_data/MockCSVFiles";
import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { REPLFunction, REPLFunctionProps } from "./REPLInterface";

export const Load: REPLFunction = (
  props: REPLFunctionProps
): string | string[][] => {
  if (props.args.length < 1) {
    return "Insufficient arguments. Expected: 1, Received 0";
  } else if (props.args.length > 1) {
    return (
      "Received too many arguments. Expected 1, Received " + props.args.length
    );
  }

  const file = props.args[0];
  //this is where we would call our load API to load the file

  if (!MockCSVFiles[file]) {
    return "File not found. No data was loaded.";
  }

  props.setFile(MockCSVFiles[file]);
  return "successfully loaded";
};
