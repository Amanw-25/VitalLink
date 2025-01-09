import React from "react";
import { useState } from "react";
import doctorImg from "../../assets/images/doctor-img01.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import DoctorFeedback from "./Feedback";
import SidePanel from "./SidePanel";
import { BASE_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData';
import Error from '../../Error/Error';
import Loading from '../../Loader/Loading';
import { useParams } from "react-router-dom";

export const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const {id}=useParams();

  const { data: response, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`);
  const doctor= response?.data;
  // console.log(doctor);

  return (
    <section>

      {loading && <Loading />}
      {error && <Error errorMessage={error} />}

      {!loading && !error && doctor && (
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mt-[30px] lg:mt-[55px]">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure>
                <img src={doctor.photo} alt="doctor" className="w-40 h-40 rounded-3xl " />
              </figure>
              <div>
                <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  {doctor.specialization}
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {doctor.name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="" /> {doctor.averageRating.toFixed(1)||0 }
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                    {doctor.reviews.length} Reviews
                  </span>
                </div>
                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  {doctor.bio}
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${tab === "about" && "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${tab === "feedback" &&
                  "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && 
                  <DoctorAbout 
                    name={doctor.name}
                    about={doctor.about}
                    qualifications={doctor.qualifications}
                    experiences={doctor.experiences}
                    
                  />}
              {tab === "feedback" && <DoctorFeedback reviews={doctor.reviews}
              totalRating={doctor.averageRating} />}
            </div>
          </div>
          <div>
            <SidePanel 
              ticketPrice={doctor.ticketPrice}
              timeSlots={doctor.timeSlots}
              
            />
          </div>
        </div>
      </div>
      )}
    </section>
  );
};
