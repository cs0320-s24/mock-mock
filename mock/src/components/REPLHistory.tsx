import { useEffect, useRef } from "react";
import "../styles/main.css";
import REPLResult, { REPLResultProps } from "./REPLResult";

interface REPLHistoryProps {
  commands: REPLResultProps[];
  mode: boolean;
}

export function REPLHistory(props: REPLHistoryProps) {

  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (props.commands.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [props.commands.length]);

  
  return (
    <div className="repl-history">
      <div>
        {props.commands.map((result) => (
          <REPLResult
            output={result.output}
            command={result.command}
            mode={props.mode}
          />
        ))}
        <div ref={ref} />
      </div>
    </div>
  );
}
