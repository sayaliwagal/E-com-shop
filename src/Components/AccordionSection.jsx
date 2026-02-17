import React, { useState } from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle  } from "react-icons/io";

const AccordionSection = ({question, answer, isOpen, setIsOpen}) => {
 

  return (

      <div className="space-y-4">
        <div className=" rounded-xl shadow-sm bg-white overflow-hidden">
         <button
         onClick={setIsOpen}
         className="w-full flex justify-between items-center p-4 text-left text-black text-xl font-medium hover:bg-gray-500"
         >
          <span>{question}</span>
          { isOpen === true ? 
          (<IoIosArrowDropupCircle size={30} /> )
          :
          (<IoIosArrowDropdownCircle size={30} />)}
          
         </button>
        {isOpen && <p className="p-4 pt-0 text-xl text-gray-600">{answer}</p>}
      </div>
      </div>

  );
};

export default AccordionSection;
