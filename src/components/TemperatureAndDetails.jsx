import React from 'react'
import cloudyImage from '../images/cloudy.png'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from '@iconscout/react-unicons'

function TemperatureAndDetails() {
  return (
    <div className=''>
        <div className='flex items-center justify-center py-6 text-xl text-white'>
            <p>Cloudy</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img 
                src= {cloudyImage} 
                alt="" 
                className='w-20'
            />
            <p className='text-5xl'>27°</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1' />
                    Feels Like:
                    <span className='font-medium ml-1'>24°</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1' />
                    Humidity:
                    <span className='font-medium ml-1'>55%</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1' />
                    Wind:
                    <span className='font-medium ml-1'>6 km/h</span>
                </div>
            </div>
        </div>
        {/* <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun />
            <p className='font-light'>
                Rise: <span className='font-medium text-xs ml-1'>06:45 AM</span>
            </p>
            <p className='font-light'>|</p>
            <UilSunset />
            <p className='font-light'>
                Set: <span className='font-medium text-xs ml-1'>07:35 AM</span>
            </p>
            <p className='font-light'>|</p>
            <UilArrowUp />
            <p className='font-light'>
                High: <span className='font-medium text-xs ml-1'>45°</span>
            </p>
            <p className='font-light'>|</p>
            <UilArrowDown />
            <p className='font-light'>
                Low: <span className='font-medium text-xs ml-1'>40°</span>
            </p>
        </div>     */}
    </div>
  )
}

export default TemperatureAndDetails