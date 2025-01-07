import React from "react";
import { formatDate } from "../../utils/formatDate";

const DoctorAbout = ({ name, about, qualification, experience }) => {

  return (
    <div>
      {/* About Section */}
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About Of
          <span className="text-irisBlueColor font-bold text-[22px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text__para">{about}</p>
      </div>

      {/* Education Section */}
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          {qualification && qualification.length > 0 ? (
            qualification.map((q, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
              >
                <div>
                  <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                    {formatDate(q.startingDate)} - {formatDate(q.endingDate)}
                  </span>
                  <p className="text-[16px] leading-6 font-medium text-textColor">
                    {q.degree}
                  </p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                  {q.institution}
                </p>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-500">No qualifications available.</p>
          )}
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mt-06">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {experience && experience.length > 0 ? (
            experience.map((exp, index) => (
              <li key={index} className="p-4 rounded bg-[#efebe2]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  {exp.position}
                </p>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  {exp.hospital}
                </p>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-500">No experiences available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
