import { ToggleProps } from "@/types";
import { IoIosMenu } from "react-icons/io";

type PropTypes = ToggleProps;
const Toggle = ({ toggleSidebar }: PropTypes) => {
  return (
    <div
      className="w-10 h-10 rounded-full bg-[#c9d4cc] flex items-center justify-center cursor-pointer lg:hidden"
      onClick={toggleSidebar}
    >
      <IoIosMenu size={22} />
    </div>
  );
};

export default Toggle;
