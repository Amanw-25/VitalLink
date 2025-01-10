import React from 'react';
import { faqs } from '../../assets/data/faqs';
import FaqItem from './FaqItem';
import { motion } from 'framer-motion';

const FaqList = () => {
  const listVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: 'easeOut' },
  };

  return (
    <motion.ul
      className="mt-[38px]"
      variants={listVariants} 
      initial="initial" 
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
    >
      {faqs.map((item, index) => (
        <FaqItem item={item} key={index} index={index} />
      ))}
    </motion.ul>
  );
};

export default FaqList;
