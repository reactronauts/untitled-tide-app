import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function Inputs({ handleClick, setName }) {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className="flex flex-row w-full items-center justify-center space-x-4">
            <input 
                type='text' 
                placeholder='search for city...' 
                onChange={e => setName(e.target.value)}
                className='text-xl font-light p-2 w-full shadow-xl rounded-xl focus:outline-none capitalize placeholder:lowercase' 
            />
            <UilSearch 
                size={25} 
                className='text-white cursor-pointer transition ease-out hover:scale-125'
                onClick={handleClick}
            />
            <UilLocationPoint 
                size={25} 
                className='text-white cursor-pointer transition ease-out hover:scale-125'
            />
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name='metric' className='text-xl text-white font-light'>
                    °C
                </button>
                <p className='text-xl text-white mx-1'>|</p>
                <button name='imperial' className='text-xl text-white font-light'>
                    °F
                </button>
            </div>
        </div>
    </div>
  );
}

export default Inputs