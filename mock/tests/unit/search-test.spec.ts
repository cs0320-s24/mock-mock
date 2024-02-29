/*
  Demo: test ordinary Java/TypeScript
*/

import { expect, test } from "vitest";

// all exports from main will now be available as main.X
// import * as main from '../mock/src/main';
import * as search from "../../src/components/REPLFunctions/Search";
import { SetStateAction } from "react";
import { REPLFunctionProps } from "../../src/components/REPLFunctions/REPLInterface";

// test("search.Search() works with existing file", () => {
//   const props: REPLFunctionProps = {
//     args: [],
//     file: [
//       ["mock1", "mock2"],
//       ["mock3", "mock4"],
//     ],
//     setFile: function (value: SetStateAction<string[][]>): void {},
//     mode: false,
//     setMode: function (value: SetStateAction<boolean>): void {},
//   };
//   expect(view.View(props)).toEqual([
//     ["mock1", "mock2"],
//     ["mock3", "mock4"],
//   ]);
// });

// For more information on how to make unit tests, visit:
// https://jestjs.io/docs/using-matchers
