import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { motion } from 'framer-motion';

const FaqItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false); // Independent state per item

  // Toggle state for each FAQ item
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Animation for each FAQ item
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.8, ease: 'easeOut' },
    },
  };

  // Animation for the content when it's opened
  const contentVariants = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#E0E0E0] mb-5 cursor-pointer"
      variants={itemVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordion}
      >
        <h4 className="text-[16px] leading-[30px] lg:text-[18px] lg:leading-[30px] text-headingColor font-[700]">
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

      {/* Animate the content for the clicked FAQ */}
      {isOpen && (
              <motion.div
              className="mt-4"
              variants={contentVariants}
              initial="initial"
              animate={isOpen ? 'animate' : 'initial'}
            >
              <p className="text-[14px] leading-[24px] lg:text-[16px] lg:leading-[30px] text-textColor">
                {item.content}
              </p>
            </motion.div>
      )}
    </motion.div>
  );
};

export default FaqItem;
