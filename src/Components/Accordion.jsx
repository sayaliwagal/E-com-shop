import React, { useState } from 'react'
import AccordionSection from './AccordionSection'



const Accordion = () => {

    const[ sectionIndex, setSectionIndex] = useState(null);
  
    const setIsOpen = (index) => {
        setSectionIndex((prev) => {
            return  prev === index?null :index;
        })
    }
  const FAQ = [
    {
        qeution: "What is react?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, eum."
    },
      {
        qeution: "What is useState?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, eum."
    },
      {
        qeution: "What is useEffect?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, eum."
    },
      {
        qeution: "What is useRef?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, eum."
    },
]
    return (
    <div className='w-1/2 border m-auto'>
       {
           FAQ.map((items, index) => {
              return ( <AccordionSection
               qeution={items.qeution}
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
