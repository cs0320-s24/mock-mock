import { MockCSVFiles } from "../../mock_data/MockCSVFiles";
import "../../styles/main.css";
import { REPLFunction, REPLFunctionProps } from "./REPLInterface";

/**
 * Function that executes load functionality through REPLFunction interface
 * @param props - REPLFunctionProps that takes in user arguments, a file constant to store current file in, mode that stores whether user is in verbose
 *                or brief, and Dispatchers for file and mode to be able to be altered by other functions
 * @returns error message if file is not found, or successfully loaded is file is loaded
 */
export const Load: REPLFunction = (
  props: REPLFunctionProps
): string | string[][] => {
  if (props.args.length < 1) {
    return "Insufficient arguments. Expected: 1, Received: 0";
  } else if (props.args.length > 1) {
    return (
      "Received too many arguments. Expected: 1, Received: " + props.args.length
    );
  }

  const file = props.args[0];
  //this is where we would call our load API to load the file

  if (!MockCSVFiles[file]) {
    return "File not found. No data was loaded.";
  }

  props.setFile(MockCSVFiles[file]);
  return "Successfully loaded";
};
