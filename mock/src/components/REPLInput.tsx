import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import { REPLCommandRegistry } from "./REPLCommandRegisty";

interface REPLInputProps {
  commands: string[];
  setCommands: Dispatch<SetStateAction<string[]>>;
  results: string[];
  setResults: Dispatch<SetStateAction<string[]>>;
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

  const handleArgs = (input: string): string => {
    const [command, ...args] = input.split(" ");

    const argFuncResult = REPLCommandRegistry[command]
      ? REPLCommandRegistry[command](args)
      : REPLCommandRegistry["default"](args);

    return argFuncResult;
  };
  /**
   * We suggest breaking down this component into smaller components, think about the individual pieces
   * of the REPL and how they connect to each other...
   */
  const handleSubmit = () => {
    setCount(count + 1);
    const output = handleArgs(commandString);

    props.setCommands([...props.commands, commandString]);
    props.setResults([...props.results, output]);
    // if (this.args.length < 2) {
    //   System.err.println("Insufficient arguments,");
    //   this.printUsage();
    //   System.exit(1);
    // }

    // String file = this.args[0];
    // String term = this.args[1];
    // boolean caseSensitive = false;
    // boolean hasHeader = false;
    // String targetColumn = "";

    // for (int i = 2; i < this.args.length; i++) {
    //   switch (this.args[i]) {
    //       // used to indicate that the file has a header.
    //     case "-h":
    //       hasHeader = true;
    //       break;
    //       // used to indicate a target column identifier
    //     case "-c":
    //       try {
    //         targetColumn = this.args[i + 1];
    //         i++;
    //       } catch (ArrayIndexOutOfBoundsException e) {
    //         System.err.print("Insufficient arguments, expected a column identifier after -c");
    //         this.printUsage();
    //         System.exit(1);
    //       }
    //       break;
    //     case "-cs":
    //       caseSensitive = true;
    //       break;
    //     default:
    //       System.err.print("Unknown flag: " + this.args[i]);
    //       this.printUsage();
    //       System.exit(1);
    //       break;
    //   }
    // }
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
      <button onClick={handleSubmit}> Submitted {count} times</button>
    </div>
  );
}
