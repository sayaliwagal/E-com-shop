import React, { forwardRef } from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = forwardRef(({searchText, setSearchText, onSearch}, ref) => {
  return (
   <div className="flex w-4xl max-w-5xl h-10 rounded-md overflow-hidden border-2 border-transparent focus-within:border-orange-600">
        <select className="bg-gray-300 px-3 text-sm outline-none border-r cursor-pointer">
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>
         <input
           type="search"
           placeholder="Search Here...."
           value={searchText}
           onChange={(e) => setSearchText(e.target.value)}
           ref={ref}
           className="min-w-0 flex-1 px-4 outline-none"
         />
         <button
           onClick={onSearch}
            className="w-[56px] min-w-[56px] h-full shrink-0 flex items-center justify-center bg-[#febd69] hover:bg-[#F3A847] text-gray-800"
         >
          <IoSearchSharp size={22} />
         </button>
      </div>
 
  );
});

export default SearchBar
