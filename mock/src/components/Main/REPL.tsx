import { useState } from "react";
import "../../styles/main.css";
import { REPLHistory } from "../REPLResponses/REPLHistory";
import { REPLInput } from "../REPLInput/REPLInput";
import { REPLResultProps } from "../REPLResponses/REPLResult";

/* 
  You'll want to expand this component (and others) for the sprints! Remember 
  that you can pass "props" as function arguments. If you need to handle state 
  at a higher level, just move up the hooks and pass the state/setter as a prop.
  
  This is a great top level component for the REPL. It's a good idea to have organize all components in a component folder.
  You don't need to do that for this gearup.
*/

export default function REPL() {
  const [results, setResults] = useState<REPLResultProps[]>([]);
  const [mode, setMode] = useState<boolean>(false);
  // TODO: Add some kind of shared state that holds all the commands submitted.

  return (
    <div className="repl">
      {/*This is where your REPLHistory might go... You also may choose to add it within your REPLInput 
      component or somewhere else depending on your component organization. What are the pros and cons of each? */}
      {/* TODO: Update your REPLHistory and REPLInput to take in new shared state as props */}
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
