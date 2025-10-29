import React from 'react'

const Filters = ({ categories, selectedCategory, setSelectedCategory, priceRange, setPriceRange 

}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
  {/* Category Dropdown */}
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
  >
    <option value="All">All Categories</option>
    {categories.map((cat) => (
      <option key={cat} value={cat}>
        {cat.charAt(0).toUpperCase() + cat.slice(1)}
      </option>
    ))}
  </select>

  {/* Price Range */}
  <div className="flex flex-col text-sm text-gray-600">
    <label className="font-medium text-gray-700 mb-1">Price Range</label>
    <input
      type="range"
      min="0"
      max="2000"
      step="50"
      value={priceRange[1]}
      onChange={(e) => setPriceRange([0, Number(e.target.value)])}
      className="w-48 accent-blue-500"
    />
    <span className="text-gray-500 mt-1">
      ₹0 - ₹{priceRange[1]}
    </span>
  </div>
</div>
  )
}

export default Filters
