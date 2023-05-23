import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import Inputs from '../components/Inputs';
import TimeAndLocation from '../components/TimeAndLocation';
import TemperatureAndDetails from '../components/TemperatureAndDetails';

const WeatherPage = () => {


  return ( 
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-custom-purple h-fit shadow-xl rounded-2xl shadow-gray-400'>
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
    </div>
  );
};

export default WeatherPage;

