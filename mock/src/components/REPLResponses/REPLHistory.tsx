import { useEffect, useRef } from "react";
import "../../styles/main.css";
import REPLResult, { REPLResultProps } from "./REPLResult";

interface REPLHistoryProps {
  commands: REPLResultProps[];
  mode: boolean;
}

/**
 * This function takes the REPLResultProps list and creates REPLResults from it to format on page
 * @param props - REPLResultProps which has commands and results stored and mode that stores whether the user is in mode verbose or brief
 * @returns the formatted results as a list in scrollable REPLHistory div
 */
export function REPLHistory(props: REPLHistoryProps) {
  const ref = useRef<HTMLDivElement>(null);

  //implements autoscroll
  useEffect(() => {
    if (props.commands.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [props.commands.length]);

  return (
    <div className="repl-history" aria-label="history">
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
