/*
  Demo: test ordinary Java/TypeScript
*/

import { expect, test } from "vitest";

// all exports from main will now be available as main.X
// import * as main from '../mock/src/main';
import * as mode from "../../src/components/REPLFunctions/Mode";
import { SetStateAction } from "react";
import { REPLFunctionProps } from "../../src/components/REPLFunctions/REPLInterface";

test("Mode.mode() should returns brief", () => {
  const props: REPLFunctionProps = {
    args: ["brief"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(mode.Mode(props)).toBe("Mode is now brief");
});

test("Mode.mode() should return verbose", () => {
  const props: REPLFunctionProps = {
    args: ["verbose"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(mode.Mode(props)).toBe("Mode is now verbose");
});

test("Mode.mode('NotBriefOrVerbose') should not work", () => {
  const props: REPLFunctionProps = {
    args: ["invalid"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(mode.Mode(props)).toBe(
    "Mode not found. Available modes are: 'verbose' and 'brief'"
  );
});

test("Mode.mode() no args should not work", () => {
  const props: REPLFunctionProps = {
    args: [],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  expect(mode.Mode(props)).toBe(
    "Insufficient arguments. Expected 'verbose' or 'brief'"
  );
});

test("mode.Mode() double brief works", () => {
  const props: REPLFunctionProps = {
    args: ["brief"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  mode.Mode(props);
  expect(mode.Mode(props)).toBe("Mode is now brief");
});

test("mode.Mode() double verbose works", () => {
  // const isVerbose = true;
  const props: REPLFunctionProps = {
    args: ["verbose"],
    file: [],
    setFile: function (value: SetStateAction<string[][]>): void {},
    mode: false,
    setMode: function (value: SetStateAction<boolean>): void {},
  };
  mode.Mode(props);
  expect(mode.Mode(props)).toBe("Mode is now verbose");
});

// For more information on how to make unit tests, visit:
// https://jestjs.io/docs/using-matchers
