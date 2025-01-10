import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";

import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";

import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonal from "../components/Testimonal/Testimonal";
import { motion } from "framer-motion";
export const Home = () => {
  const fadeInSide = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeInRightSide = {
    initial: { opacity: 0, x: 150 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const buttonHover = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
  };

  return (
    <>
      {/* ========Hero-Section======== */}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              <div>
                <motion.div className="lg:w-[570px]" {...fadeInSide}>
                  <h1
                    className="text-[36px] leading-[46px] text-headingColor font-[800] 
                md:text-[60px] md:leading-[70px]"
                  >
                    Take care of your body, it's the only place you have to
                    live.
                  </h1>
                  <p className="text__para">
                    Finding doctors online at any time offers convenience,
                    immediate access, and a broader range of expertise. It saves
                    time, eliminates travel, and enables timely medical
                    consultations, diagnosis, and treatment. This accessibility
                    empowers individuals to prioritize their well-being and seek
                    expert healthcare advice with ease and convenience.
                  </p>
                  <motion.button className="btn" {...buttonHover}>
                    Request An Appointment
                  </motion.button>
                </motion.div>

                <motion.div
                  className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]"
                  {...fadeInUp}
                >
                  <div>
                    <h2
                      className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor"
                    >
                      20+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Years Of Experience</p>
                  </div>

                  <div>
                    <h2
                      className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor"
                    >
                      10+
                    </h2>
                    <span className="w-[100px] h-2 bg-purple-300 rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Clinic Location</p>
                  </div>

                  <div>
                    <h2
                      className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor"
                    >
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Patient Satisfaction</p>
                  </div>
                </motion.div>
              </div>

                <motion.div
                  className="flex gap-[30px] justify-end"
                  {...fadeInRightSide}
                >
                  <div>
                    <motion.img
                      className="xl:w-[370px] h-[625px] rounded-full sm:w-[300px]"

                      src={heroImg01}
                      alt=""
                      {...buttonHover}
                    />
                  </div>
                  <div className="mt-[30px] hidden md:block">
                    <motion.img
                      src={heroImg02}
                      alt=""
                      className="w-[270px] h-[270px] rounded-[80px] mb-[30px]"
                      {...buttonHover}
                    />
                    <motion.img
                      src={heroImg03}
                      alt=""
                      className="w-[270px] h-[270px] rounded-[80px]"
                      {...buttonHover}
                    />
                  </div>
                </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}

        <section className="py-16 px-4">
  <motion.div
    className="container mx-auto"
    variants={fadeInUp}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.1 }}
  >
    <div className="lg:w-[470px] mx-auto">
      <h2 className="heading text-center">
        Providing The Best Medical Services
      </h2>
      <p className="text__para text-center">
        World-Class Care For Everyone. Our Health System Offers
        Unmatched, Expert Health Care.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[30px] lg:mt-[55px]">
      
      <motion.div
        className="py-[30px] px-5 w-full"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center justify-center">
          <img src={icon01} alt="Find A Doctor" />
        </div>
        <div className="mt-[30px]">
          <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Find A Doctor
          </h2>
          <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
            World-Class Care For Everyone. Our Health System Offers
            Unmatched, Expert Health Care. From The Lab To The Clinic.
          </p>
          <Link
            to="/doctors"
            className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
            hover:bg-primaryColor hover:border-none justify-center"
          >
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="py-[30px] px-5 w-full"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center justify-center">
          <img src={icon02} alt="Find A Location" />
        </div>
        <div className="mt-[30px]">
          <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Find A Location
          </h2>
          <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
            World-Class Care For Everyone. Our Health System Offers
            Unmatched, Expert Health Care. From The Lab To The Clinic.
          </p>
          <Link
            to="/doctors"
            className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
            hover:bg-primaryColor hover:border-none justify-center"
          >
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="py-[30px] px-5 w-full"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className="flex items-center justify-center">
          <img src={icon03} alt="Book Appointment" />
        </div>
        <div className="mt-[30px]">
          <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Book Appointment
          </h2>
          <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
            World-Class Care For Everyone. Our Health System Offers
            Unmatched, Expert Health Care. From The Lab To The Clinic.
          </p>
          <Link
            to="/doctors"
            className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
            hover:bg-primaryColor hover:border-none justify-center"
          >
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </motion.div>
    </div>
  </motion.div>
</section>


        {/* About Section */}
        <About />

        {/* Testimonials Section */}

        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our Medical Services</h2>
              <p className="text__para text-center">
                World-Class Care For Everyone. Our Health System Offers
                Unmatched, Expert Health Care.
              </p>
            </div>

            <ServiceList />
          </div>
        </section>

        {/* Feature section */}
        <section>
          <div className="container">
            <div className="flex items-center justify-between flex-col lg:flex-row">
              <div className="xl:w-[670px]">
                <h2 className="heading ml-4">
                  Get Virtual Treatment <br /> Anytime.
                </h2>

                <ul className="pl-4">
                  <li className="text__para mt-[30px]">
                    1. Schedule The Appointment Directly.
                  </li>
                  <li className="text__para mt-[10px]">
                    2. Search for Your Physician Here and Contact Their Office.
                  </li>
                  <li className="text__para mt-[10px]">
                    3. View Our Physicians Who Are Accepting New Patients, Use
                    the Online Scheduling Tool to Select an Appointment Time.
                  </li>
                </ul>
                <Link to="/doctors">
                  <button className="btn">Learn More</button>
                </Link>
              </div>

              <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                <img src={featureImg} className="w-3/4 rounded-3xl" alt="" />

                <div
                  className="w-[150px] lg:w-[248px] bg-[#636363] absolute bottom-[50px] left-0 md:bottom-[100px] 
              md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3">
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-white font-[600]">
                        Tue , 24
                      </p>
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-white font-[400]">
                        10:00 AM
                      </p>
                    </div>
                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-black rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                      <img src={videoIcon} alt="" />
                    </span>
                  </div>

                  <div
                    className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px]
               leading-[8px] lg:text-[12px] lg:leading-4 text-black font-[500] mt-2 lg:mt-4 rounded-full"
                  >
                    Consultation
                  </div>

                  <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                    <img src={avatarIcon} alt="" />
                    <h4
                      className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]
                 text-white"
                    >
                      Aman Wairagkar
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors section */}

        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our Great Doctors</h2>
              <p className="text__para text-center">
                World-Class Care For Everyone. Our Health System Offers
                Unmatched, Expert Health Care.
              </p>
            </div>

            <DoctorList />
          </div>
        </section>

        {/* ========= FAQ SECTION ======== */}
        <section>
          <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-0">
              <div className="w-1/2 hidden md:block">
                <img src={faqImg} alt="" className="h-[85%] w-[75%]"/>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="heading">
                  Most Questions by beloved <br /> Patients
                </h2>
                <FaqList />
              </div>
            </div>
          </div>
        </section>

        {/* =======Testimonal=========*/}

        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">What our Patients Says</h2>
              <p className="text__para text-center">
                World-Class Care For Everyone. Our Health System Offers
                Unmatched, Expert Health Care.
              </p>
            </div>
          </div>

          <Testimonal />
        </section>
      </>
    </>
  );
};
