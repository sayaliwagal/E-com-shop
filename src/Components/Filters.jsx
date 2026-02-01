import React from 'react'
import { useNavigate } from 'react-router'

const Filters = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  priceRange, 
  setPriceRange 
}) => {

  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)

    if(category === "All") {
      navigate("/");
    }else{
      navigate(`/category/${category}`);
    }
  }
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
  {/* Category Dropdown */}
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700  dark:text-white dark:bg-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
  >
    <option value="All">All Categories</option>
    {categories.map((cat) => (
      <option key={cat} value={cat}>
        {cat.charAt(0).toUpperCase() + cat.slice(1)}
      </option>
    ))}
  </select>

  {/* Price Range */}
  <div className="flex flex-col text-sm text-gray-600 dark:text-white">
    <label className="font-medium text-gray-700 dark:text-white mb-1">Price Range</label>
    <input
      type="range"
      min="0"
      max="2000"
      step="50"
      value={priceRange[1]}
      onChange={(e) => setPriceRange([0, Number(e.target.value)])}
      className="w-48 accent-blue-500"
    />
    <span className="text-gray-500 dark:text-white mt-1">
      ₹0 - ₹{priceRange[1]}
    </span>
  </div>
</div>
  )
}

export default Filters
