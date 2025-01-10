import React, { useState, useContext } from 'react';
import userImg from '../../assets/images/doctor-img02.png';
import { AuthContext } from '../../context/AuthContext';
import MyBookings from './MyBookings';
import Profile from './Profile';
import userGetProfile from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
import Loading from '../../Loader/Loading';
import Error from '../../Error/Error';

const MyAccount = () => {
  const { dispatch } = useContext(AuthContext);
  const [tab, setTab] = useState('bookings'); // Correct initialization

  const { data: userData, loading, error } = userGetProfile(`${BASE_URL}/user/profile/me`);  

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="max-w-[1170px] px-5 mx-auto mt-10">

      {loading && !error && <Loading/>}

      {error && !loading && <Error errorMessage={error}/>}

      {!loading && !error && (
        <div className="grid md:grid-cols-3 gap-10">
        {/* Profile Section */}
        <div className="pb-[50px] px-[30px] rounded-md">
          <div className="flex items-center justify-center">
            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
              <img src={userData.data.photo} alt="User" className="w-full h-full rounded-full" />
            </figure>
          </div>

          <div className="text-center mt-4">
            {/* Dynamic profile data */}
            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
              {userData ? userData.data.name : 'Loading...'}
            </h3>
            <p className="text-textColor text-[15px] leading-6 font-medium">
              {userData ? userData.data.email : 'Loading...'}
            </p>
            <p className="text-textColor text-[15px] leading-6 font-medium">
              Blood Type: <span className="text-primaryColor">{userData ? userData.data.bloodType : 'Loading...'}</span>
            </p>
          </div>

          <div className="mt-[50px] md:mt-[100px] text-center">
            <button
              onClick={handleLogout}
              className="w-1/2 bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white mb-5"
            >
              Logout
            </button>
            <br />
            <button className="w-1/2 bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white">
              Delete Account
            </button>
          </div>
        </div>

        {/* Additional Actions Section */}
        <div className="md:col-span-2 md:px-[30px]">
          <div>
            <button
              onClick={() => setTab('bookings')}
              className={`p-2 mr-5 px-5 rounded-md text-headingColor font-semibold border-2 border-solid border-primaryColor ${tab === 'bookings' ? 'bg-primaryColor text-white font-normal' : ''}`}
            >
              My Booking
            </button>
            <button
              onClick={() => setTab('settings')}
              className={`p-2 mr-5 px-5 rounded-md text-headingColor font-semibold border-2 border-solid border-primaryColor ${tab === 'settings' ? 'bg-primaryColor text-white font-normal' : ''}`}
            >
              Profile Setting
            </button>
          </div>

          <div className="mt-10">
            {/* Conditional rendering based on the active tab */}
            {tab === 'bookings' && <MyBookings />}
            {tab === 'settings' && <Profile user={userData}/>}
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default MyAccount;
