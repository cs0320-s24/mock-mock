/*
  Demo: test ordinary Java/TypeScript
*/

import { expect, test } from "vitest";

// all exports from main will now be available as main.X
// import * as main from '../mock/src/main';
import * as view from "../../src/components/REPLFunctions/View";
import { SetStateAction } from "react";
import { REPLFunctionProps } from "../../src/components/REPLFunctions/REPLInterface";

test("view.View() works with existing file", () => {
  const props: REPLFunctionProps = {
    args: [],
    file: [
      ["mock1", "mock2"],
      ["mock3", "mock4"],
    ],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(view.View(props)).toEqual([
    ["mock1", "mock2"],
    ["mock3", "mock4"],
  ]);
});

test("view.View() does not work with empty file ", () => {
  const props: REPLFunctionProps = {
    args: [],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(view.View(props)).toEqual([["error", "No Data Found"]]);
});

test("view.View() does not work with args ", () => {
  const props: REPLFunctionProps = {
    args: ["something"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(view.View(props)).toEqual([["error", "Expected 0 args"]]);
});

//in an ideal world, we unit test interactions between view load mode and search. It may be better to test these
//using playwright, since we manage these interactions with states.
test("view.View() double view works", () => {
  const props: REPLFunctionProps = {
    args: [],
    file: [
      ["mock1", "mock2"],
      ["mock3", "mock4"],
    ],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(view.View(props)).toEqual([
    ["mock1", "mock2"],
    ["mock3", "mock4"],
  ]);
  expect(view.View(props)).toEqual([
    ["mock1", "mock2"],
    ["mock3", "mock4"],
  ]);
});

// For more information on how to make unit tests, visit:
// https://jestjs.io/docs/using-matchers
