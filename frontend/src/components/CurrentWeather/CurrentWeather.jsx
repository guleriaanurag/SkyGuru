import { useEffect, useState } from 'react';
import {fetchData} from '../../assets/fuctions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

import DateTime from './DateTime';
import Widget from './Widget';
import WindDetails from './WindDetails';
import SunDetails from './SunTime';
import './CurrentWeather.css'

export default function CurrentWeather({coords,mode}){

    const[weatherData,setWeatherData] = useState({});

    useEffect(()=>{
        const{lat,lon} = coords;
        const fetchAndUpdateData = async()=>{
            await fetchData(lat,lon,mode,setWeatherData);
        }
        fetchAndUpdateData();
    },[coords,mode])

    return(
        <>
        {weatherData.weather &&<div className="currentdata-wrapper h-[95%] w-[90%] mt-[30px] rounded-lg flex flex-col items-center max-md:w-[95%] max-md:mt-[80px]">
            {/* Basic Info */}
            <div className='flex flex-row justify-between w-full px-4 pt-2 max-md:flex-col'>
                <p className='text-md text-stone-900 max-md:text-center'>Current Weather</p>
                <DateTime />
            </div>
            {/* Rest of the data */}
            <div className='w-full'>
                <div className='flex w-full justify-evenly mt-[40px]'>
                    <div className='mt-4'>
                        <p className='capitalize text-lg'> <FontAwesomeIcon icon={faLocationDot} className='text-xl'/> <span>{weatherData.name}, {weatherData.sys.country}</span></p>
                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Cloud" />
                        <p className='ml-5 text-md'>{weatherData.weather[0].main}</p>
                    </div>
                    <Widget data={weatherData}/>
                </div>
                <WindDetails windInfo={weatherData.wind} mode={mode}/>
                <SunDetails sunData={weatherData.sys}/>
            </div> 
        </div>}
        </>
    );
}