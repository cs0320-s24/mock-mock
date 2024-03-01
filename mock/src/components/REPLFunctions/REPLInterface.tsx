import { Dispatch, SetStateAction, useState } from "react";

/**
 * Interface for all commands to implement. This allows for polymorphism and makes it easy to add more commands for developers.
 */
export interface REPLFunctionProps {
  args: Array<string>;
  file: string[][];
  setFile: Dispatch<SetStateAction<string[][]>>;
  mode: boolean;
  setMode: Dispatch<SetStateAction<boolean>>;
}
export interface REPLFunction {
  (props: REPLFunctionProps): string | string[][];
}
