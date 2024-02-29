/*
  Demo: test ordinary Java/TypeScript
*/

import { expect, test } from "vitest";

// all exports from main will now be available as main.X
// import * as main from '../mock/src/main';
import * as search from "../../src/components/REPLFunctions/Search";
import { SetStateAction } from "react";
import { REPLFunctionProps } from "../../src/components/REPLFunctions/REPLInterface";
import {
  getSuccessfulSearchResponseWithColumnIndex,
  getSuccessfulSearchResponseWithColumnName,
  getSuccessfulSearchResponseWithToken,
} from "../../src/mock_data/MockSearchResponses";

test("search.Search() works with token", () => {
  const props: REPLFunctionProps = {
    args: ["token"],
    file: [
      ["mock1", "mock2"],
      ["mock3", "mock4"],
    ],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(search.Search(props)).toEqual(
    getSuccessfulSearchResponseWithToken.responseMap.data
  );
});

test("search.Search() works with token and column", () => {
  const props: REPLFunctionProps = {
    args: ["token", "column"],
    file: [
      ["mock1", "mock2"],
      ["mock3", "mock4"],
    ],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(search.Search(props)).toEqual(
    getSuccessfulSearchResponseWithColumnName.responseMap.data
  );
});

test("search.Search() works with token and index", () => {
  const props: REPLFunctionProps = {
    args: ["token", "1"],
    file: [
      ["mock1", "mock2"],
      ["mock3", "mock4"],
    ],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(search.Search(props)).toEqual(
    getSuccessfulSearchResponseWithColumnIndex.responseMap.data
  );
});

test("search.Search() does not work with no args", () => {
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
  expect(search.Search(props)).toEqual([
    ["error", "Received <0> args Expected 1 or 2"],
  ]);
});

test("search.Search() does not work with too many args", () => {
  const props: REPLFunctionProps = {
    args: ["token", "column", "extra", "extra"],
    file: [
      ["mock1", "mock2"],
      ["mock3", "mock4"],
    ],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(search.Search(props)).toEqual([
    ["error", "Received <4> args Expected 1 or 2"],
  ]);
});
// For more information on how to make unit tests, visit:
// https://jestjs.io/docs/using-matchers
