const convertTime = (time) => {
  const timeParts = time.split(':');
  let hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);

  let meridian = 'AM';
  
  if (hours >= 12) {
    if (hours > 12) hours -= 12; 
    meridian = 'PM';
  } else if (hours === 0) {
    hours = 12; 
    meridian = 'AM';
  }

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${formattedMinutes} ${meridian}`;
};

export default convertTime;