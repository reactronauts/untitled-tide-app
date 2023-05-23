import React from 'react'
import { DateTime } from 'luxon'

function TimeAndLocation({ data }) {
  const dt = DateTime.now().setZone(data.timeZoneId);
  const dateString = dt.toFormat('cccc, d LLLL yyyy');
  const timeString = dt.toFormat('hh:mm a');

  return (
    <div className=''>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
          {dateString} | Local time: {timeString}
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

export default TimeAndLocation



