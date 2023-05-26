import React from 'react'
import cloudyImage from '../images/cloudy.png';
import clearImage from '../images/clear.png';
import rainImage from '../images/rain.png';
import drizzleImage from '../images/drizzle.png';
import mistImage from '../images/mist.png';

function Forecast({title}) {
  return (
    <div className=''>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>
                Hourly Forecast
            </p>
        </div>
        <hr className='my-2' />
        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center'>
                <p className='font-light'>
                    4:30 PM
                </p>
                <img 
                    src={clearImage}
                    className='w-12 my-1' 
                    alt=""
                />
                <p className='font-medium'>
                    22°
                </p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-light text-sm'>
                    4:30 PM
                </p>
                <img 
                    src={clearImage}
                    className='w-12 my-1' 
                    alt=""
                />
                <p className='font-medium'>
                    22°
                </p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-light text-sm'>
                    4:30 PM
                </p>
                <img 
                    src={clearImage}
                    className='w-12 my-1' 
                    alt=""
                />
                <p className='font-medium'>
                    22°
                </p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-light text-sm'>
                    4:30 PM
                </p>
                <img 
                    src={clearImage}
                    className='w-12 my-1' 
                    alt=""
                />
                <p className='font-medium'>
                    22°
                </p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-light text-sm'>
                    4:30 PM
                </p>
                <img 
                    src={clearImage}
                    className='w-12 my-1' 
                    alt=""
                />
                <p className='font-medium'>
                    22°
                </p>
            </div>
        </div>
    </div>
  )
}

export default Forecast