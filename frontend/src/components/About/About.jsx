import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";

function About() {
  const fadeInSide = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 4.2, ease: "easeInOut" }, 
  };

  const fadeInRightSide = {
    initial: { opacity: 0, x: 150 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 4.2, ease: "easeInOut" },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 4.2, ease: "easeInOut", delay: 1.5 },
  };

  const buttonHover = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
  };

  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:first-letter:order-1">
            <motion.img
              src={aboutImg}
              alt="About Image"
              variants={fadeInSide}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              className="h-[85%] w-[] lg:ml-[-10%] rounded-3xl"
            />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <motion.img
                src={aboutCardImg}
                alt="About"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 mt-[100px]">
            <h2 className="heading ">Proud To Be One Of The Nations Best</h2>
            <p className="text__para  mt-[18px]">
              Welcome To Our Doctor s Appointment App! Our Goal Is To Provide
              Seamless Healthcare Access, Enabling You To Book Appointments,
              Access Medical Records, And Receive Personalized Care, All In One
              Place.
            </p>

            <p className="text__para mt-[30px]">
              Introducing Our Revolutionary Doctor s Appointment App! Designed
              With Your Convenience in Mind, It Streamlines the Booking Process,
              Offers Real-Time Availability, and Provides Secure Communication
              With Healthcare Professionals. Experience Hassle-Free Healthcare
              at Your Fingertips!
            </p>



            <Link to="/doctors">
              <motion.button className="btn" {...buttonHover}>
                Learn More
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
