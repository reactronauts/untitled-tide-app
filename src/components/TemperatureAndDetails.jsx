import React from 'react';
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from '@iconscout/react-unicons'

function TemperatureAndDetails({ data, unit }) {
  return (
    <div className=''>
        <div className='flex items-center justify-center py-6 text-xl text-white'>
            <p>{data.description}</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <div className='w-1/3 flex justify-start'>
              <img 
                  src={data.image} 
                  alt="" 
                  className='w-20'
              />
            </div>
            <div className='w-1/3 flex justify-start'>
              <p className='text-5xl ml-3'>{Math.round(unit === 'metric' ? data.celsius : data.celsius * 9 / 5 + 32)}°</p>
            </div>
            <div className='w-1/3'>
              <div className='flex flex-col space-y-2'>
                  <div className='flex font-light text-sm items-center justify-start'>
                      <UilTemperature size={18} className='mr-1' />
                      Feels Like:
                      <span className='font-medium ml-1'>{Math.round(unit === 'metric' ? data.feels : data.feels * 9 / 5 + 32)}°</span> {/* Need to replace with the actual 'feels like' data */}
                  </div>
                  <div className='flex font-light text-sm items-center justify-start'>
                      <UilTear size={18} className='mr-1' />
                      Humidity:
                      <span className='font-medium ml-1'>{data.humidity}%</span>
                  </div>
                  <div className='flex font-light text-sm items-center justify-start'>
                      <UilWind size={18} className='mr-1' />
                      Wind Speed:
                      <span className='font-medium ml-1'>{Math.round(unit === 'metric' ? data.wind : data.wind * 0.621371)} {unit === 'metric' ? 'km/h' : 'mph'}</span>
                  </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default TemperatureAndDetails;


