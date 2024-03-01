import "../../styles/main.css";
import Table from "./FormatTable";

export interface REPLResultProps {
  output: string | string[][];
  command: string;
  mode: boolean;
}

/**
 * Function that takes in outputs from executed commands and formats them to post on page
 * @param props - REPLResultProps that takes in the output of a command, the command itself, and whatever mode the user is in
 * @returns - formatted output whether the command is successful or outputs an error. This output can be in mode verbose or brief
 */
export function REPLResult(props: REPLResultProps): JSX.Element {
  //this formats output
  const formatOutput = (props: REPLResultProps) => {
    //if the command is search or view, make output into a table
    if (props.command == "search" || props.command == "view") {
      return (
        <div className="output">
          <Table tableInfo={props.output as string[][]} />
        </div>
      );

      //if the command is load or mode, then just print out single response
    } else if (props.command == "load" || props.command == "mode") {
      return (
        <div>
          <p>{props.output}</p>
        </div>
      );

      //if command is not found, then highlight red and print command not found message
    } else {
      return (
        <p className="badInputStyle output">
          Command: "{props.command}" not found!
        </p>
      );
    }
  };

  let output = formatOutput(props);
  //if verbose is off just use formatted output
  if (props.mode == false ) {
    return <div className="result">{output}</div>;

    //if verbose is on, add extra info and then formatOutputs
  } else {
    return (
      <div className="result">
        <p>Command: {props.command}</p>
        <p>Output: </p>
        {output}
      </div>
    );
  }
}

export default REPLResult;
