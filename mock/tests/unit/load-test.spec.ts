/*
  Demo: test ordinary Java/TypeScript
*/

import { expect, test } from "vitest";

// all exports from main will now be available as main.X
// import * as main from '../mock/src/main';
import * as load from "../../src/components/REPLFunctions/Load";
import { SetStateAction } from "react";
import { REPLFunctionProps } from "../../src/components/REPLFunctions/REPLInterface";

test("load.Load() works with existing file", () => {
  const props: REPLFunctionProps = {
    args: ["census/income_by_race.csv"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(load.Load(props)).toBe("Successfully loaded");
});

test("load.Load() works with a different existing file", () => {
  const props: REPLFunctionProps = {
    args: ["census/postsecondary_education.csv"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(load.Load(props)).toBe("Successfully loaded");
});

test("load.Load() no args should not load", () => {
  const props: REPLFunctionProps = {
    args: [],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(load.Load(props)).toBe(
    "Insufficient arguments. Expected: 1, Received: 0"
  );
});

test("load.Load() too many args should not work", () => {
  const props: REPLFunctionProps = {
    args: ["filepath", "extraarg", "other extra arg"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(load.Load(props)).toBe(
    "Received too many arguments. Expected: 1, Received: 3"
  );
});

test("load.Load() nonexistent file", () => {
  const props: REPLFunctionProps = {
    args: ["census/income.csv"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(load.Load(props)).toBe("File not found. No data was loaded.");
});

//this tests does not test for overwriting loaded data, since that involves a React state.
//this is instead tested in a playwright test.
test("load.Load() double load works", () => {
  const props: REPLFunctionProps = {
    args: ["census/income_by_race.csv"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(load.Load(props)).toBe("Successfully loaded");
  expect(load.Load(props)).toBe("Successfully loaded");
});

test("load.Load() double load works with different files", () => {
  const props: REPLFunctionProps = {
    args: ["census/income_by_race.csv"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(load.Load(props)).toBe("Successfully loaded");
  props.args = ["census/postsecondary_education.csv"];
  expect(load.Load(props)).toBe("Successfully loaded");
});

test("load.Load() calling load w/ load prefix does not work", () => {
  const props: REPLFunctionProps = {
    args: ["load", "census/income_by_race.csv"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(load.Load(props)).toBe(
    "Received too many arguments. Expected: 1, Received: 2"
  );
});

//as we integrate load, future tests should account for restraints within the API, such as no navigating
//to backwards directories.
// For more information on how to make unit tests, visit:
// https://jestjs.io/docs/using-matchers
