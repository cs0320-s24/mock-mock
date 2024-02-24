import "../styles/main.css";
import { REPLFunction } from "./REPLInterface";

//hashmap or a record with mock filepaths. 

export const Load: REPLFunction = (args: Array<string>): string => {
    //attempt to open the file
    //if the file opened successfully: return success/failure
  return "Loaded!";
};
