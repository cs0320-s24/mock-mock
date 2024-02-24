import "../styles/main.css";

interface REPLHistoryProps {
  commands: string[];
}
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {props.commands.map((command, index) => (
        <p aria-label={command} key={command + index}>
          {command}
        </p>
      ))}
      {/* This is where command history will go */}
      {/* TODO: To go through all the pushed commands... try the .map() function! */}
    </div>
  );
}
