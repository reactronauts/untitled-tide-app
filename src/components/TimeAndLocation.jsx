import React from 'react';
import { DateTime } from 'luxon';

function TimeAndLocation({ data }) {
  let dateAndTime;
  if (typeof data.dateTime === 'number') {
    const dt = DateTime.utc().plus({ seconds: data.dateTime });
    const dateString = dt.toFormat('cccc, d LLLL yyyy');
    const timeString = dt.toFormat('hh:mm a');
    dateAndTime = `${dateString} | Local time: ${timeString}`;
  } else {
    dateAndTime = data.dateTime || 'Invalid timezone offset, try refreshing!';
  }

  return (
    <div className=''>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
          {dateAndTime}
        </p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
          {data.name}
        </p>
      </div>
    </div>
  )
}

export default TimeAndLocation;





