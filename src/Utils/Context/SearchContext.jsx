import { createContext,useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children}) => {
    const [searchText, setSearchText ] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <SearchContext.Provider 
        value = {{
            searchText,
            setSearchText,
            selectedCategory,
            setSelectedCategory
        }}
        >
        {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () =>  useContext(SearchContext);