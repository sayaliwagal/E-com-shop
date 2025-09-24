  export const filterValues = (products, searchText) => {
    const filterProduct = products.filter((value, i) => {
      return value.title.toLowerCase().includes(searchText.toLowerCase());
      
    });
     return filterProduct;
    
  };