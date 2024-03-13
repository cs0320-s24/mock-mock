import "../../styles/main.css";
import { REPLFunction, REPLFunctionProps } from "./REPLInterface";


/**
 * Function that returns loaded file as a list of lists
 * @param props - REPLFunctionProps that takes in user arguments, a file constant to store current file in, mode that stores whether user is in verbose
 *                or brief, and Dispatchers for file and mode to be able to be altered by other functions
 * @returns - returns the currently loaded file or an error if no file is loaded or the incorrect amount of arguments is passed in
 */
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
