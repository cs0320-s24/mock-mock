import "../../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import { REPLCommandRegistry } from "../REPLFunctions/REPLCommandRegisty";
import REPLResult, { REPLResultProps } from "../REPLResponses/REPLResult";

interface REPLInputProps {
  replResults: REPLResultProps[];
  setReplResults: Dispatch<SetStateAction<REPLResultProps[]>>;
  mode: boolean;
  setMode: Dispatch<SetStateAction<boolean>>;
}

/**
 * Function that calls CommandRegistry to execute commands and creates REPLResultProps for each
 * Also handles the user input to give to CommandRegistry
 * @param props - REPLInputProps that stores a list of REPLResults and the current user mode
 * @returns the input component and the submit button
 */
export function REPLInput(props: REPLInputProps) {

  const [commandString, setCommandString] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [file, setFile] = useState<string[][]>([]);

  //handles user input to give to CommandRegistry and execute commands
  const handleArgs = (
    input: string,
    props: REPLInputProps
  ): REPLResultProps => {
    const [command, ...args] = input.split(" ");

    const argFuncResult = (
      mode: boolean,
      setMode: Dispatch<SetStateAction<boolean>>
    ) => {
      if (REPLCommandRegistry[command]) {
        return REPLCommandRegistry[command]({
          args,
          file,
          setFile,
          mode,
          setMode,
        });
      } else {
        return REPLCommandRegistry["default"]({
          args,
          file,
          setFile,
          mode,
          setMode,
        });
      }
    };

    //returns REPLResultProps to store
    return {
      output: argFuncResult(props.mode, props.setMode),
      command: command,
      mode: props.mode,
    };
  };

  //stores REPLResultProps in list, updates submit button count, and resets input
  const handleSubmit = (commandString: string) => {
    setCount(count + 1);
    const replResult = handleArgs(commandString, props);
    props.setReplResults([...props.replResults, replResult]);
    setCommandString("");
    document.getElementById("Command Input")?.focus();
  };

  return (
    <div className="repl-input">

      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
          
        />
      </fieldset>
      <button onClick={() => handleSubmit(commandString)}>
        Submitted {count} times
      </button>
    </div>
  );
}
