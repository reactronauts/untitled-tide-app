import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function Inputs({ handleSubmit, setName, unit, setUnit }) {
  const handleUnitChange = (event) => {
    event.preventDefault();
    setUnit(event.target.name);
  };

  return (
    <div className='flex flex-col md:flex-row md:justify-center my-3'>
      <form onSubmit={handleSubmit} className="flex flex-row w-full items-center justify-center space-x-4">
        <input 
          type='text' 
          placeholder='search for city...' 
          onChange={e => setName(e.target.value)}
          className='md:text-xl text-s font-light p-2 w-full shadow-xl rounded-xl focus:outline-none capitalize placeholder:lowercase' 
        />
        <button type='submit' className='bg-transparent border-none cursor-pointer p-0 m-0'>
          <UilSearch 
            size={25} 
            className='text-white cursor-pointer transition ease-out hover:scale-125'
          />
        </button>
        <button type='submit' className='bg-transparent border-none cursor-pointer p-0 m-0 md:block'>
          <UilLocationPoint 
            size={25} 
            className='text-white cursor-pointer transition ease-out hover:scale-125'
          />
        </button>
        {/* only show on larger screens */}
        <div className=' flex-row w-1/4 items-center justify-center hidden md:flex'>
          <button name='metric' onClick={handleUnitChange} className='text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125'>
            °C
          </button>
          <p className='text-xl text-white mx-2.5'>|</p>
          <button name='imperial' onClick={handleUnitChange} className='text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125'>
            °F
          </button>
        </div>
      </form>
      {/* only show on mobile screens */}
      <div className='flex justify-center items-center md:hidden mt-7'>
        <button name='metric' onClick={handleUnitChange} className='text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125'>
          °C
        </button>
        <p className='text-xl text-white mx-2.5'>|</p>
        <button name='imperial' onClick={handleUnitChange} className='text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125'>
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;

