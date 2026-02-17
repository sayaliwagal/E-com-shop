import React, { useState } from 'react'
import  { accordionData } from '../constant.js'
import AccordionSection from './AccordionSection'



const Accordion = () => {

    const[ sectionIndex, setSectionIndex] = useState(null);
  
    const setIsOpen = (index) => {
        setSectionIndex((prev) => {
            return  prev === index? null :index;
        })
    }
  
    return (
    <div className='w-1/2 flex flex-col gap-10 justify-between m-auto'>
       {
accordionData.map((items, index) => {
              return ( <AccordionSection
               question={items.question }
               answer={items.answer}
               key={index}
               isOpen={sectionIndex === index}
               setIsOpen={()=>{setIsOpen(index)}}
               />
              )
            })
        }
    </div>
  )
}

export default Accordion
