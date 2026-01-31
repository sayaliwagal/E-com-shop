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
        //check dynamic rote
        const productMatch = matchPath("/products/:title/:id", location.pathname);
        if(productMatch){
          const {title, id} = productMatch.params;
          newTitle = `${decodeURIComponent(title)}`;
        }
      }

        //Category page
        if(!newTitle) {
          const categoryMatch = matchPath("/category/:category", location.pathname);

          if(categoryMatch) {
            const { category } = categoryMatch.params;
            newTitle = `${category.replace("-", " ")}`
          }
        }
      if(!newTitle){
        newTitle = titles["/*"] || "Page not found";
      }
      document.title = newTitle;
     },[location.pathname])
   return null;
   }

   export default DynamicTitle;