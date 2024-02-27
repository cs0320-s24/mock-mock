import "../styles/main.css";
import Table from "./FormatTable";

export interface REPLResultProps {
  output: string | string[][];
  command: string;
  mode: boolean;
}

export function REPLResult(props: REPLResultProps): JSX.Element {
  //this formats output
  const formatOutput = (props: REPLResultProps) => {
    //if the command is search or view, make output into a table
    if (props.command == "search" || props.command == "view") {
      return (
        <div className="result">
          <Table tableInfo={props.output as string[][]} />
        </div>
      );

      //if the command is load or mode, then just print out single response
    } else if (props.command == "load" || props.command == "mode") {
      return (
        <div className="result">
          <p>{props.output}</p>
        </div>
      );

      //if command is not found, then highlight red and print command not found message
    } else {
      return (
        <p className="badInputStyle result">
          Command: "{props.command}" not found!
        </p>
      );
    }
  };

  //if verbose is off just use formatted output
  if (props.mode == false) {
    return formatOutput(props);

    //if verbose is on, add extra info and then formatOutputs
  } else {
    return (
      <div>
        <p>Command: {props.command}</p>
        <p>Output: </p>
        {formatOutput(props)}
      </div>
    );
  }
}

export default REPLResult;
