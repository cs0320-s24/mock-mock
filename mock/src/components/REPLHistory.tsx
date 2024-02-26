import "../styles/main.css";
import REPLResult, { REPLResultProps } from "./REPLResult";

interface REPLHistoryProps {
  commands: REPLResultProps[];
}

export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {props.commands.map((result, index) => (
        <REPLResult output={result.output} command={result.command} />
      ))}
      {/* This is where command history will go */}
    </div>
  );
}
