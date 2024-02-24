import "../styles/main.css";

interface REPLHistoryProps {
  commands: JSX.Element[];
}

export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {props.commands.map((result, index) => result)}
      {/* This is where command history will go */}
      {/* TODO: To go through all the pushed commands... try the .map() function! */}
    </div>
  );
}
