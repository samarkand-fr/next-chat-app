import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="h-[96px] w-full flex items-center px-4">
      <div className="flex items-center w-full px-3 py-2 rounded-full space-x-1 bg-[#c9d4cc] ">
        <IoIosSearch className="text-xl text-[#2c2d2c]" />
        <input
          type="text"
          name=""
          id=""
          placeholder="search"
          className="bg-transparent outline-none placeholder:text-[#2c2d2c] text-xs font-light flex-1 text-[#2c2d2c]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
