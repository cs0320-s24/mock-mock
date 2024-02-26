import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import { REPLCommandRegistry } from "./REPLCommandRegisty";
import REPLResult, { REPLResultProps } from "./REPLResult";

interface REPLInputProps {
  replResults: REPLResultProps[];
  setReplResults: Dispatch<SetStateAction<REPLResultProps[]>>;
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
}

export interface REPLFunction {
  (args: Array<string>): String | String[][];
}

// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props: REPLInputProps) {
  // Remember: let React manage state in your webapp.
  // Manages the contents of the input box
  const [commandString, setCommandString] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [file, setFile] = useState<string[][]>([]);
  const [mode, setMode] = useState<boolean>(false);

  const handleArgs = (input: string): REPLResultProps => {
    const [command, ...args] = input.split(" ");

    const argFuncResult = REPLCommandRegistry[command]
      ? REPLCommandRegistry[command]({args, file, setFile, mode, setMode})
      : REPLCommandRegistry["default"]({args, file, setFile, mode, setMode});

    return { output: argFuncResult, command: command, mode: mode };
  };
  /**
   * We suggest breaking down this component into smaller components, think about the individual pieces
   * of the REPL and how they connect to each other...
   */
  const handleSubmit = (commandString: string) => {
    setCount(count + 1);
    const replResult = handleArgs(commandString);
    props.setReplResults([...props.replResults, replResult]);
  };

  return (
    <div className="repl-input">
      {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
      {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
      </fieldset>
      {/* TODO WITH TA: Build a handleSubmit function that increments count and displays the text in the button */}
      {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
      <button onClick={() => handleSubmit(commandString)}>
        Submitted {count} times
      </button>
    </div>
  );
}
