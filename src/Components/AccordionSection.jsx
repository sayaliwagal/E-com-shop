import React, { useState } from "react";

const AccordionSection = ({qeution, answer, isOpen, setIsOpen}) => {
//   const [isOpen, setIsOpen] = useState(false);
  return (
    <>

      <div className="border text-xl my-10">
        <div className="question flex justify-between">
          <p>{qeution}</p>
          <button className="bg-black text-white px-4 py-4 cursor-pointer"
        onClick={setIsOpen}
          >Expand me +</button>
        </div>
        {isOpen && <p className="answer">{answer}</p>}
      </div>
    </>
  );
};

export default AccordionSection;
