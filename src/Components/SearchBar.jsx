import React, { forwardRef } from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = forwardRef(({searchText, setSearchText, selectedCategory, setSelectedCategory, categories, onSearch}, ref) => {
  return (
   <div className="flex w-full  h-10 rounded-md overflow-hidden border-2 border-transparent focus-within:border-orange-600">
        <select className="bg-gray-300 text-sm outline-none border-r cursor-pointer"
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
           className="min-w-1 flex-1 px-5 outline-none"
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
