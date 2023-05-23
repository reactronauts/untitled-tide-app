import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function Inputs({ handleSubmit, setName }) {
  return (
    <div className='flex flex-row justify-center my-6'>
      <form onSubmit={handleSubmit} className="flex flex-row w-full items-center justify-center space-x-4">
        <input 
          type='text' 
          placeholder='search for city...' 
          onChange={e => setName(e.target.value)}
          className='text-xl font-light p-2 w-full shadow-xl rounded-xl focus:outline-none capitalize placeholder:lowercase' 
        />
        <button type='submit' className='bg-transparent border-none cursor-pointer p-0 m-0'>
          <UilSearch 
            size={25} 
            className='text-white cursor-pointer transition ease-out hover:scale-125'
          />
        </button>
        <button type='submit' className='bg-transparent border-none cursor-pointer p-0 m-0'>
        <UilLocationPoint 
          size={25} 
          className='text-white cursor-pointer transition ease-out hover:scale-125'
        />
        </button>
        <div className='flex flex-row w-1/4 items-center justify-center'>
          <button name='metric' className='text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125'>
            °C
          </button>
          <p className='text-xl text-white mx-2.5'>|</p>
          <button name='imperial' className='text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125'>
            °F
          </button>
        </div>
      </form>
    </div>
  );
}

export default Inputs;
