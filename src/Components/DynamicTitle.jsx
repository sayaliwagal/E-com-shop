  import { useLocation, matchPath, } from "react-router";
  import {titles} from "../constant.js"
  import { useEffect } from "react";
const DynamicTitle = () => {
    const location = useLocation();
    // console.log(location);
     useEffect(() =>{
      let newTitle = titles[location.pathname];

      if(!newTitle){
        //check dynamic rote
        const match = matchPath("/products/:title/:id", location.pathname);
        if(match){
          const {title, id} = match.params;
          newTitle = `${title} | Product #${id}`;
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