import React from 'react';
import './App.css'
import Body from './Components/Body';
import useOnline from './Utils/useOnline';


function App({addToCart}) {
    const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div>
        <h1>Oops! Internet Conection L🔴st</h1>
      </div>
    );
  }
 return(
  <>
  
    <Body addToCart ={addToCart}/>
 </>
  ) 
}  
export default App