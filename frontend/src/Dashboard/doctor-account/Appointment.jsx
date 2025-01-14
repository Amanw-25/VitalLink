import React from 'react';
import { formatDate } from '../../utils/formatDate';

const Appointment = ({ appointments }) => {

  console.log(appointments);
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100 border-b border-gray-300">
        <tr>
          <th scope="col" className="p-3 text-left">Name</th>
          <th scope="col" className="p-3 text-left">Gender</th>
          <th scope="col" className="p-3 text-left">Payment</th>
          <th scope="col" className="p-3 text-left">Price</th>
          <th scope="col" className="p-3 text-left">Booked On</th>
        </tr>
      </thead>

      <tbody>
        {appointments.length > 0 ? (
          appointments.map((item) => (
            <tr key={item._id} className="border-b border-gray-300">
              <td className="flex items-center px-5 py-4 text-gray-900 whitespace-nowrap">
                <img
                  src={item.user.photo}
                  className="w-10 h-10 rounded-full"
                  alt="User"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">{item.user.name}</div>
                  <div className="text-xs text-gray-600">{item.user.email}</div>
                </div>
              </td>
              <td className="px-5 py-4">{item.user.gender}</td>
              <td className='px-5 py-4'>
                {item.isPaid ? (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-3"></div>
                    <span className="text--500 font-semibold text-sm">Paid</span>
                  </div>

                ) : (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-Red-500 mr-2">
                      UnPaid

                    </div>
                  </div>

                )}
              </td>
              <td className="px-5 py-4">{item.ticketPrice}</td>
              <td className="px-5 py-4">
                {formatDate(item.createdAt)}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center py-4 text-gray-500">
              No appointments available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Appointment;
