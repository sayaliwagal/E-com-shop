import React, { forwardRef } from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = forwardRef(({searchText, setSearchText, selectedCategory, setSelectedCategory, categories, onSearch}, ref) => {
  return (
   <div className="flex w-full  h-10 bg-white rounded-md overflow-hidden border-2 border-gray-300 focus-within:border-orange-600 focus-within:rign-2 focus-within:rign-orange-300">
        <select className="w-24 bg-gray-200 text-gray-700  text-sm outline-none border-r border-gray-300 cursor-pointer"
          value={selectedCategory}
          onChange={(e)=> setSelectedCategory(e.target.value)}>
            <option value="All">All</option>
            {categories?.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          
        </select>
         <input
           type="search"
           placeholder="Search Here...."
           value={searchText}
           onChange={(e) => setSearchText(e.target.value)}
           ref={ref}
           className="flex-1 min-w-0 px-4 text-sm bg-white text-gray-800 outline-none"
         />
         <button
           onClick={onSearch}
            className="w-14 flex items-center justify-center bg-[#febd69] hover:bg-[#F3A847] text-gray-800"
         >
          <IoSearchSharp size={22} />
         </button>
      </div>
 
  );
});

export default SearchBar
