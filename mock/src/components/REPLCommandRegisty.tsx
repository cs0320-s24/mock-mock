import { Load } from "./Load";
import { REPLFunction } from "./REPLInterface";
import { Search } from "./Search";
import { View } from "./View";
import { Mode } from "./mode";

export const REPLCommandRegistry: Record<string, REPLFunction> = {
  load: Load,
  search: Search,
  view: View,
  mode: Mode,
  default: () => "Command not found",

};
