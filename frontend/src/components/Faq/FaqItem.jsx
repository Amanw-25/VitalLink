import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#E0E0E0] mb-5 cursor-pointer'>
      <div
        className='flex items-center justify-between gap-5 '
        onClick={toggleAccordion}
      >
        <h4 className='text-[16px] leading-[30px] lg:text-[18px] lg:leading-[30px] text-headingColor font-[700]'>
          {item.question}
        </h4>

        <div
          className={`${
            isOpen ? 'bg-primaryColor text-white border-none' : 'bg-[#F2F2F2]'
          } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {isOpen && (
        <div className='mt-4'>
          <p className='text-[14px] leading-[24px] lg:text-[16px] lg:leading-[30px] text-textColor'>
          {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
