import React from 'react';
import './App.css'
import Body from './Components/ProductListing';
import { useSelector } from 'react-redux';
import useOnline from './Utils/useOnline';


function App() {
  const theme = useSelector((state) => state.theme.mode);

    const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div>
        <h1>Oops! Internet Conection L🔴st</h1>
      </div>
    );
  }
 return(
  <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50 min-h-screen">
    <Body/>
 </div>
  ) 
}  
export default App