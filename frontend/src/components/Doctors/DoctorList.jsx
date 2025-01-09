import React from 'react';
import DoctorCard from './DoctorCard';
import { BASE_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData';
import Error from '../../Error/Error';
import Loading from '../../Loader/Loading';

function DoctorList() {
  const { data: response, loading, error } = useFetchData(`${BASE_URL}/doctors`);
  const doctors= response?.data;

  return (
    <>
      {loading && <Loading />}
      {error && <Error errorMessage={error} />}

      {!loading && !error && Array.isArray(doctors) && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}

      {!loading && !error && !Array.isArray(doctors) && (
        <p className="text-center text-gray-600">No doctors found or invalid data format.</p>
      )}
    </>
  );
}

export default DoctorList;
