import ConversationsList from "./ConversationsList";
import SearchBar from "./SearchBar";
import Toggle from "./Toggle";
import classNames from "classnames";
import { ToggleProps } from "@/types";
type PropTypes = ToggleProps;

const Conversation = ({ sidebar, toggleSidebar }: PropTypes) => {
  return (
    <div
      className={classNames(
        "absolute w-full lg:w-[320px] h-screen left-0 top-0 bottom-0 bg-[#1d3e26] z-10",
        {
          "hidden lg:block": sidebar,
        }
      )}
    >
      <div className="ml-4 mt-3">
        <Toggle toggleSidebar={toggleSidebar} />
      </div>
      <SearchBar />
      <ConversationsList />
    </div>
  );
};

export default Conversation;
