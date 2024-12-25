import React from "react";
import DoctorCard from "../../components/Doctors/DoctorCard";
import { doctors } from "../../assets/data/doctors";
import Testimonal from "../../components/Testimonal/Testimonal";

export const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor </h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-center">
            <input
              type="search"
              className="w-full py-3 px-4 rounded-md bg-transparent focus:outline-none"
              placeholder="Search for a doctor"
            />
            <button className="bg-primaryColor text-white py-3 px-6 rounded-md ml-9">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="conatiner">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ml-[100px] ">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

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

          <Testimonal/>

        </section>
    </>
  );
};
