import "../../styles/main.css";
import { REPLFunction, REPLFunctionProps } from "./REPLInterface";
import {
  getSuccessfulSearchResponseWithColumnIndex,
  getSuccessfulSearchResponseWithColumnName,
  getSuccessfulSearchResponseWithToken,
  invalidSearch,
} from "../../mock_data/MockSearchResponses";

/**
 * This function runs search on the currently loaded file. Right now, it calls a mock class to return example responses.
 * @param props - REPLFunctionProps that takes in user arguments, a file constant to store current file in, mode that stores whether user is in verbose
 *                or brief, and Dispatchers for file and mode to be able to be altered by other functions
 * @returns the ouput of calling Search in our backend as a response map.
 */
export const Search: REPLFunction = (
  props: REPLFunctionProps
): string | string[][] => {
  let response;

  //first check if valid number of arguments are input by user
  if (props.args.length > 2) {
    return [
      ["error", "Received <" + props.args.length + "> args Expected 1 or 2"],
    ];
  } else if (props.args.length < 1) {
    return [["error", "Received <0> args Expected 1 or 2"]];
  }

  //cheks that there is a loaded file
  if (props.file.length == 0) {
    return [["error: ", "No File Data Found"]];
  }

  //here instead of calling random search response, we will call our API and validate the args
  if (props.args.length == 1) {
    response = getSuccessfulSearchResponseWithToken;
    if (props.args[0] == "error") {
      response = invalidSearch;
    }
  } else {

    //we know for a fact the length must be 2 here.
    //this is for mock purposes, but when connected to backend, it will do its own parsing
    if (isNaN(parseInt(props.args[1]))) {
      response = getSuccessfulSearchResponseWithColumnName;
    } else {
      response = getSuccessfulSearchResponseWithColumnIndex;
    }
  }

  //after running through logic, returns an error message if an error is encountered
  if (response.response_type != "success") {
    return [["error:", response.response_type]];
  } else {
    return response.responseMap.data;
  }
};
