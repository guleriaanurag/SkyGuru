import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

import './CurrentWeather.css'
import DateTime from './DateTime';
import Widget from './Widget';
import WindDetails from './WindDetails';
import SunDetails from './SunTime';
import useFetch from '../../hooks/useFetch';
import CurrentWeatherSkeleton from '../../ui/CurrentWeatherSkeleton';

export default function CurrentWeather({coords,mode}){

    const{
        isLoading,
        data:weatherData,
        error,
    } = useFetch('weather/',coords,mode,{});
    
    return(
        <>
        {isLoading ? (<CurrentWeatherSkeleton />) : (
            <>
                {weatherData.weather && 
                <div className="currentweather-wrapper h-[95%] w-[90%] mt-[30px] rounded-lg flex flex-col items-center max-md:w-[95%] max-md:mt-[80px]">
                    <div className='flex flex-row justify-between w-full px-4 pt-2 max-md:flex-col'>
                        <p className='text-md text-stone-900 dark:text-sky-100 max-md:text-center'>Current Weather</p>
                        <DateTime />
                    </div>
                    <div className='w-full'>
                        <div className='flex w-full justify-evenly mt-[40px]'>
                            <div className='mt-4 w-[45%] flex flex-col items-center justify-center'>
                                <p className='capitalize text-lg'> <FontAwesomeIcon icon={faLocationDot} className='text-xl dark:text-sky-400'/> <span className='dark:text-sky-100'>{weatherData.name}, {weatherData.sys.country}</span></p>
                                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Cloud" />
                                <p className='text-md dark:text-sky-100'>{weatherData.weather[0].main}</p>
                            </div>
                            <Widget data={weatherData}/>
                        </div>
                        <WindDetails windInfo={weatherData.wind} mode={mode}/>
                        <SunDetails sunData={weatherData.sys}/>
                    </div> 
                </div>}
            </>
        )}
        </>
    );
}