  import { useLocation, matchPath, } from "react-router";
  import {titles} from "../constant.js"
  import { useEffect } from "react";
const DynamicTitle = () => {
    const location = useLocation();
    // console.log(location);
     useEffect(() =>{
      let newTitle = titles[location.pathname];
       
      //Product details page.
      if(!newTitle){
        //check dynamic route
        const productMatch = matchPath("/products/:title/:id", location.pathname);
        if(productMatch){
          const {title, id} = productMatch.params;
          newTitle = `${decodeURIComponent(title)}`;
        }
      }

      // Product list with category page
      if(!newTitle) {
        const categoryMatch = matchPath("/products/:category", location.pathname);
        if(categoryMatch){
          const { category } = categoryMatch.params;
          if(category === "all") {
            newTitle = "All Products";
          } else {
            newTitle = `${category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ")} Products`;
          }
        }
      }

      // Base products route (no category)
      if(!newTitle && location.pathname === "/products") {
        newTitle = "All Products";
      }

      if(!newTitle){
        newTitle = titles["/*"] || "Page not found";
      }
      document.title = newTitle;
     },[location.pathname])
   return null;
   }

   export default DynamicTitle;