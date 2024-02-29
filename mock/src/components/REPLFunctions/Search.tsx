import "../../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { REPLFunction, REPLFunctionProps } from "./REPLInterface";
import {
  getRandomSearchResponse,
  getSuccessfulSearchResponseWithColumnIndex,
  getSuccessfulSearchResponseWithColumnName,
  getSuccessfulSearchResponseWithToken,
  invalidSearch,
} from "../../mock_data/MockSearchResponses";

export const Search: REPLFunction = (
  props: REPLFunctionProps
): string | string[][] => {
  let response;
  if (props.args.length > 2) {
    return [
      ["error", "Received <" + props.args.length + "> args Expected 1 or 2"],
    ];
  } else if (props.args.length < 1) {
    return [["error", "Received <0> args Expected 1 or 2"]];
  }

  if (props.file.length == 0) {
    return [["error: ", "No File Data Found"]];
  }
  //here instead of calling random search response, we will call our API and validate the args
  // const response = getRandomSearchResponse();  //commenting this out for testing.
  if (props.args.length == 1) {
    response = getSuccessfulSearchResponseWithToken;
    if (props.args[0] == "error") {
      response = invalidSearch;
    }
  } else {
    //we know for a fact the length must be 2 here.
    if (isNaN(parseInt(props.args[1]))) {
      response = getSuccessfulSearchResponseWithColumnName;
    } else {
      response = getSuccessfulSearchResponseWithColumnIndex;
    }
  }
  if (response.response_type != "success") {
    return [["error:", response.response_type]];
  } else {
    // if(isNaN(parseInt(response.responseMap.column))){
    //   return response.responseMap.data
    // } else {
    //   if(response.responseMap.data.length > 0){
    //     const newHeader: string[] = [];
    //     for(let i = 0; i < response.responseMap.data[0].length; i+=1){
    //       newHeader.push[""+i];
    //     }
    //   }
    // }
    return response.responseMap.data;
  }
};
