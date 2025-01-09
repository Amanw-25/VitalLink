import convertTime from "../../utils/convertTime";
import { BASE_URL, token } from "../../config";
import Error from "../../Error/Error";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const SidePanel = ({ ticketPrice, timeSlots }) => {
  const doctorId = useParams().id;

  const bookingHandler = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/booking/checkout-session/${doctorId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message + "Please try again later");
      }
      console.log(data);

      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="shadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">TicketPrice</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} &#8377;
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        {timeSlots.map((slot, index) => (
          <ul className="mt-3" key={index}>
            <li className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {slot.day}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(slot.startTime)} : {convertTime(slot.endTime)}
              </p>
            </li>
          </ul>
        ))}
      </div>
      <button className="btn px-2 w-full rounded-md" onClick={bookingHandler}>
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
