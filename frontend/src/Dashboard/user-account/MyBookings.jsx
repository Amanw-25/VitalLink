import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import Error from '../../Error/Error'
import Loading from '../../Loader/Loading'
import { token } from '../../config'
import { BASE_URL } from '../../config'
import DoctorCard from '../../components/Doctors/DoctorCard'

const MyBookings = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/user/appointments/my-appointments`);
  const appointments = data ? data.data : [];

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMessage={error} />}

      {!loading && !error && Array.isArray(appointments) && appointments.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map(doctor => (
            <DoctorCard key={doctor._id} doctor={doctor.doctor} appointment={doctor} />
          ))}
        </div>
      )}

      {!loading && !error && Array.isArray(appointments) && appointments.length === 0 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-headingColor">No appointments yet</h2>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
