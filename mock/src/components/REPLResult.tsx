export interface REPLResultProps {
  output: string | string[][];
  command: string;
  mode: boolean;
}

export function REPLResult(props: REPLResultProps): JSX.Element {
  const badInputStyle = {
    background: "red",
    color: "white",
  } as const;
  return (
    <div>
      {props.output == "Command not found" ? (
        <p style={badInputStyle}>Command: "{props.command}" not found!</p>
      ) : (
        <p>command: {props.command}</p>
      )}
    </div>
  );
}

export default REPLResult;
