import React, { useState } from 'react';
import { BASE_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData';
import Tabs from './Tabs';
import Error from '../../Error/Error';
import Loading from '../../Loader/Loading';

const Dashboard = () => {
  const { data: userData, loading, error } = useFetchData(`${BASE_URL}/doctors/profile/me`);
  const [tab, setTab] = useState("overview");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {error && !loading && <Error errorMessage={error} />}

        {!loading && !error && userData && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[70px]">
            <Tabs tab={tab} setTab={setTab} />

            <div className="lg:col-span-2">
              {userData.data.isApproved === 'pending' && (
                <div className="flex items-center p-2 mb-4 text-yellow-600 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg shadow-md w-full">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6zm0 6a1 1 0 10-2 0 1 1 0 012 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">Your approval is pending <p className="text-xs text-gray-600 mt-1">Please wait for the admin to approve your profile before proceeding further.</p></span>
                    
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
