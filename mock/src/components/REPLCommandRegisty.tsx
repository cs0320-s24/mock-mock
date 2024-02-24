import { Load } from "./Load";
import { REPLFunction } from "./REPLInterface";
import { Search } from "./Search";
import { View } from "./View";

export const REPLCommandRegistry: Record<string, REPLFunction> = {
  load: Load,
  search: Search,
  view: View,
  default: () => "Command not found",
};
