import { NavigationItems } from "./NavigationItems";
import { PostButton } from "./PostButton";

export function NavigationBar() {
  return (
    <div className="w-48">
      <div className="flex flex-col space-y-2">{NavigationItems()}</div>
      <div>{PostButton()}</div>
    </div>
  );
}
