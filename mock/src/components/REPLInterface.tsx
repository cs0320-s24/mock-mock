import { Dispatch, SetStateAction, useState } from "react";

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
