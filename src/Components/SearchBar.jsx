import React, { forwardRef } from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = forwardRef(({searchText, setSearchText, onSearch}, ref) => {
  return (
   <div className="flex rounded-full border-2 border-blue-500 dark:border-slate-700 overflow-hidden max-w-md mx-auto">
         <input
           type="search"
           placeholder="Search Here...."
           value={searchText}
           onChange={(e) => setSearchText(e.target.value)}
           ref={ref}
           className="w-full outline-none bg-slate-100 dark:bg-slate-800 text-xl font-bold text-gray-950 dark:text-slate-50 px-5 py-3"
         />
         <button
           onClick={onSearch}
           className="flex items-center rounded-r-full justify-center bg-blue-600 dark:bg-slate-600 hover:bg-blue-700 dark:hover:bg-slate-700 px-6 text-slate-50"
         >
          <IoSearchSharp size={30} />
         </button>
         </div>
 
  );
});

export default SearchBar
