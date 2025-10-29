  export const filterValues = (products = [], searchText = "") => {
    if(!Array.isArray(products)) return [];

    const lowerText = searchText.toLowerCase().trim();

    if(!lowerText) return products; // return all if search empty
    
    const filterProduct = products.filter((value) => {
      return value.title.toLowerCase().includes(lowerText) ||
          value.category.toLowerCase().includes(lowerText);
      
    });
     return filterProduct;
    
  };

  export const filterByCategoryAndPrice = (products, category, priceRange = [0, Infinity]) => {
    if(!Array.isArray(products)) return [];
    
    let filtered = [...products];


    if(category && category !== "All"){
      filtered = filtered.filter((item) => {
        return item.category?.toLowerCase().includes(category.toLowerCase());
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