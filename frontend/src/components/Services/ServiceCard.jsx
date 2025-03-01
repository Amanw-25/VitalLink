import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ServiceCard({ item, index }) {
  const { name, desc, bgColor, textColor } = item;

  const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay: index * 0.2 },
  };

  return (
    <motion.div
      className="py-[30px] px-3 lg:px-5"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <span>
          <Link
            to="/doctors"
            className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center group
                    hover:bg-primaryColor hover:border-none justify-center"
          >
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
          </Link>
        </span>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "100%",
          }}
        >
          {index + 1}
        </span>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
