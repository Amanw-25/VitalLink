import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-8 h-8 cursor-pointer text-primaryColor" />
      </span>

      <div className="hidden lg:flex flex-col p-6 bg-white shadow-xl items-center h-max rounded-lg w-[300px]">
        <button
          onClick={() => setTab("overview")}
          className={`w-full py-3 px-6 mb-3 rounded-md text-lg transition-all duration-300 ${
            tab === "overview" ? "bg-indigo-100 text-primaryColor shadow-md" : "bg-transparent text-headingColor hover:bg-indigo-50"
          }`}
        >
          Overview
        </button>

        <button
          onClick={() => setTab("appointments")}
          className={`w-full py-3 px-6 mb-3 rounded-md text-lg transition-all duration-300 ${
            tab === "appointments" ? "bg-indigo-100 text-primaryColor shadow-md" : "bg-transparent text-headingColor hover:bg-indigo-50"
          }`}
        >
          Appointments
        </button>

        <button
          onClick={() => setTab("settings")}
          className={`w-full py-3 px-6 mb-3 rounded-md text-lg transition-all duration-300 ${
            tab === "settings" ? "bg-indigo-100 text-primaryColor shadow-md" : "bg-transparent text-headingColor hover:bg-indigo-50"
          }`}
        >
          Profile
        </button>

        <div className="mt-6 w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] p-3 text-lg rounded-md text-white mb-3 transition-all duration-300 hover:bg-[#141617]"
          >
            Logout
          </button>
          <button
            className="w-full bg-red-600 p-3 text-lg rounded-md text-white transition-all duration-300 hover:bg-red-700"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
