import { useState,useRef, useContext, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { IoMoon } from 'react-icons/io5';
import { FaSun } from 'react-icons/fa'

import AirPollution from "./AirPollution/AirPollution";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import Loader from "./Loader";
import CheckConnection from "./CheckConnection";
import { getCoordinates } from "../util/functions";

export default function MainWrapper(){
  // state for handling the location coordinates
  const[coordinates,setCoordinates] = useState({
    lat: null,
    lon: null,
  })
  // state for managing the mode in which the data is fetched
  const[mode,setMode] = useState('metric');
  const city = useRef();

  // the code below is used to calculate the class for the mode switch buttons
  let cClass = "cursor-pointer";
  let fClass = "cursor-pointer";

  if(mode==='metric'){
    cClass+=' text-stone-100 dark:underline';
    fClass+=' dark:text-stone-200 hover:text-stone-200';
  }
  else{
    cClass+=' dark:text-stone-200 hover:text-stone-200';
    fClass+=' text-stone-100 dark:underline'
  }

  // function to handle the search button click

  const handleClick = async ()=>{
    if(city.current.value.trim()===''){
      alert('Input cannot be empty');
      return;
    }
    try {
      // helper function that geocodes the location name to coordinates
      setCoordinates(await getCoordinates(city.current.value));
      city.current.value = '';
    } catch (err) {
      alert(err.message);
    }
  }

  // functions handling the mode switch

  function degreeCelsiusClicked(){
    if(mode==='imperial'){
      setMode('metric');
    }
    else{
      return;
    }
  }

  function degreeFarenheitClicked(){
    if(mode==='metric'){
      setMode('imperial');
    }
    else{
      return;
    }
  }

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
      setCoordinates({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      })
    })
  },[])

  const [ darkTheme, setDarkTheme ] = useState(localStorage.getItem('skyGuruDarkTheme') || true);

  useEffect(()=>{
    if(darkTheme){
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
  },[darkTheme])

  function toggleTheme(){
    setDarkTheme( prevState => {
      localStorage.setItem('skyGuruDarkTheme',!prevState);
      return !prevState;
    })
  }

  return (
    <CheckConnection>
        <div className='h-[90vh] w-[95vw] bg-teal-600 dark:bg-teal-900 bg-opacity-95 flex flex-col rounded-lg max-md:mt-16 max-xl:overflow-scroll'>
          {/* Input Div */}
          <div className="flex justify-evenly pt-[20px] max-md:fixed max-md:w-full">
            {coordinates.lat!==null && <div>
              <p className="text-lg mt-2"><span className={cClass} onClick={degreeCelsiusClicked}>&deg;C</span> | <span className={fClass} onClick={degreeFarenheitClicked}>&deg;F</span></p>
            </div>}
            <input type="text" className="outline-none border-transparent w-[60%] pl-[20px] h-[40px] rounded-[30px]" placeholder="Enter City..." ref={city}/>
            <div className="flex gap-4 max-md:flex-col max-md:gap-2">
              <button onClick={handleClick} className="w-[43px] h-[40px] rounded-full transition-colors duration-300 bg-stone-50 hover:bg-stone-400 border-transparent max-md:mr-3"> <FontAwesomeIcon icon={faMagnifyingGlass}/> </button>
              <button
                onClick={toggleTheme}
                className="w-[43px] h-[40px] rounded-full bg-stone-400 flex items-center justify-center"
              >
                {darkTheme ? <IoMoon className="w-[30px] h-[30px] rounded-full text-stone-50"/> : <FaSun className="w-[30px] h-[30px] rounded-full text-md text-orange-600"/>}
              </button>
            </div>
          </div>

          {/* Rest of the content */}
          {coordinates.lat!==null && <div className="weatherdata-wrapper flex flex-row max-md:flex-col h-full max-md:overflow-scroll">
            <div className="input-section pt-[10px] p-[20px] w-[40%] max-md:w-full max-md:h-full max-md:pr-[5px] max-md:pl-[10px]">
              {coordinates.lat && <CurrentWeather coords={coordinates} mode={mode}/>}
            </div>
            <div className="weather-section overflow-hidden p-6 w-[60%] pl-0 flex flex-col max-md:overflow-visible max-md:w-full">
              {coordinates.lat && <AirPollution coords={coordinates}/>}
              {coordinates.lat && <WeatherForecast coords={coordinates} mode={mode}/>}
            </div>
          </div>}
          
          {/* Rendering a loader if coordinates are null i.e. location not provided or city not searched */}
          {coordinates.lat===null && (
            <Loader>
              <p className='text-md font-light text-stone-100'>
                Welcome! We're waiting for your location to provide real-time weather data.
                <span>Grant us access for a personalized weather experience!</span>
              </p>
              <p className='text-md font-light text-stone-200'>
                Or, you can manually search for weather information of a specific location.
              </p>
            </Loader>
          )}

        </div>
        <footer className='text-sky-500 mt-2 text-md text-center'>
          Developed by <span className="text-stone-950 font-bold dark:text-stone-100">Anurag Guleria</span>
        </footer>
    </CheckConnection>
  );
}