import "../../styles/main.css";
import { REPLFunction, REPLFunctionProps } from "./REPLInterface";

/**
 * Function that implements REPLFunction interface that changes between modes for user
 * @param props - REPLFunctionProps that takes in user arguments, a file constant to store current file in, mode that stores whether user is in verbose
 *                or brief, and Dispatchers for file and mode to be able to be altered by other functions
 * @returns Success message on proper input or error message on improper input
 */
export const Mode: REPLFunction = (
  props: REPLFunctionProps
): string | string[][] => {
  if (props.args.length == 0) {
    return "Insufficient arguments. Expected 'verbose' or 'brief'";
  }
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
