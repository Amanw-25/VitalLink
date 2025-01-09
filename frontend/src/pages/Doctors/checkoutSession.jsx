import { Link } from "react-router-dom"; 

const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 mb-[170px]">
      <div className="bg-white p-6 md:mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="green"
            strokeWidth="4"
            fill="none"
          />
          <path
            fill="none"
            stroke="green"
            strokeWidth="6"
            d="M25 50l15 15 35-35"
          />
        </svg>

        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p>Have a great day!</p>
          <div className="py-4 mt-5">
            <Link
              to="/home"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
