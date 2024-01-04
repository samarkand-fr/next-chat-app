import { IoIosSearch } from "react-icons/io";
const SearchBar = () => {
  return (
    <div className="h-[96px] w-full flex items-center px-4">
        <div className="flex items-center w-full px-3 py-2 rounded-full space-x-1 bg-[#5436397A] ">
        <IoIosSearch className="text-xl text-white"/>
        <input type="text" name="" id="" 
             placeholder="search" 
             className="bg-transparent outline-none placeholder:text-[#FFFFFFF99] text-xs font-light flex-1 text-white" />
        </div>
    </div>
  )
}

export default SearchBar