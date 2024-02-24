import { Dispatch, SetStateAction, useState } from "react";

export interface REPLFunction {
  (
    args: Array<string>,
    file: string[][],
    setFile: Dispatch<SetStateAction<string[][]>>
  ): string;
}
