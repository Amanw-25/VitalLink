import convertTime from "../../utils/convertTime";
const SidePanel = ({ ticketPrice, timeSlots }) => {
    return (
        <div className='shadow p-3 lg:p-5 rounded-md'>
            <div className="flex items-center justify-between">
                <p className='text__para mt-0 font-semibold'>
                    TicketPrice
                </p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                    {ticketPrice} &#8377;
                </span>
            </div>
            <div className='mt-[30px]'>
                <p className='text__para mt-0 font-semibold text-headingColor'>
                    Available Time Slots:
                </p>
                {timeSlots.map((slot, index) => (
                    <ul className='mt-3' key={index}>
                        <li className='flex items-center justify-between mb-2'>
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>
                                {slot.day}
                            </p>
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>
                                {convertTime(slot.startTime)} : {convertTime(slot.endTime)}
                            </p>
                        </li>
                    </ul>
                ))}

            </div>
            <button className='btn px-2 w-full rounded-md'>
                Book
            </button>
        </div>
    )
}

export default SidePanel