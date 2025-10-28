  export const filterValues = (products, searchText) => {
    const filterProduct = products.filter((value, i) => {
      return value.title.toLowerCase().includes(searchText.toLowerCase()) ||
          value.category.toLowerCase().includes(searchText.toLowerCase());
      
    });
     return filterProduct;
    
  };

  export const filterByCategoryAndPrice = (products, category, priceRange) => {
    let filtered = [...products];

    //Category filter
    if(category && category !== "All"){
      filtered = filtered.filter((item) => {
        return item.category.toLowerCase() ===category.toLowerCase();
      });
    }

    //Price filter
    if(priceRange && priceRange.length === 2){
      filtered = filtered.filter((item) =>{
        return item.price >= priceRange[0] && item.price <= priceRange[1]
      });
    }
    return filtered;
  };