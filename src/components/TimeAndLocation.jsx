import React from 'react'

function TimeAndLocation() {
  return (
    <div className=''>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                Friday, 25 May 2022 | Local time: 01:23 PM
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                Tokyo
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation