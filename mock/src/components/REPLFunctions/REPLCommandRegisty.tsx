import { Load } from "./Load";
import { REPLFunction } from "./REPLInterface";
import { Search } from "./Search";
import { View } from "./View";
import { Mode } from "./Mode";


/**
 * Registry used to call commands in REPLInput. Acts a dictionary and makes it easy to add more commands.
 * default is used for commands not found
 */
export const REPLCommandRegistry: Record<string, REPLFunction> = {
  load: Load,
  search: Search,
  view: View,
  mode: Mode,
  default: () => "Command not found",
};
