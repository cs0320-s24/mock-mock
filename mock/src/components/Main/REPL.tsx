import { useState } from "react";
import "../../styles/main.css";
import { REPLHistory } from "../REPLResponses/REPLHistory";
import { REPLInput } from "../REPLInput/REPLInput";
import { REPLResultProps } from "../REPLResponses/REPLResult";

/**
 * This function creates the REPL functionality, connecting inputs to input history
 * @returns the REPLHistory and REPLInput components
 */

export default function REPL() {
  const [results, setResults] = useState<REPLResultProps[]>([]);
  const [mode, setMode] = useState<boolean>(false);

  return (
    <div className="repl">
      <REPLHistory commands={results} mode={mode} />
      <hr></hr>
      <REPLInput
        replResults={results}
        setReplResults={setResults}
        mode={mode}
        setMode={setMode}
      />
    </div>
  );
}
