import { useState,useEffect,useRef } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { getCoordinates } from "../assets/fuctions";

import AirPollution from "./AirPollution/AirPollution";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import Loader from "./Loader";

export default function Main(){
  const[coordinates,setCoordinates] = useState({
    lat: null,
    lon: null,
  })
  const[mode,setMode] = useState('metric');
  const city = useRef();
  
  let cClass = "cursor-pointer";
  let fClass = "cursor-pointer";

  if(mode==='metric'){
    cClass+=' text-stone-200';
    fClass+=' hover:text-stone-200';
  }
  else{
    cClass+=' hover:text-stone-200';
    fClass+=' text-stone-200'
  }

  const handleClick = async ()=>{
    if(city.current.value===''){
      alert('Input cannot be empty');
      return;
    }
    try {
      setCoordinates(await getCoordinates(city.current.value));
      city.current.value = '';
    } catch (err) {
      console.log(err);
    }
  }

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
    });
  },[])

  return (
    <>
        <div className="h-[90vh] w-[95vw] bg-teal-600 bg-opacity-95 flex flex-col rounded-lg max-md:mt-16 max-xl:overflow-scroll">
          {/* Input Div */}
          <div className="flex justify-evenly pt-[20px] max-md:fixed max-md:w-full">
            {coordinates.lat!==null && <div>
              <p className="text-lg mt-2"><span className={cClass} onClick={degreeCelsiusClicked}>&deg;C</span> | <span className={fClass} onClick={degreeFarenheitClicked}>&deg;F</span></p>
            </div>}
            <input type="text" className="outline-none border-transparent w-[60%] pl-[20px] h-[40px] rounded-[30px]" placeholder="Enter City..." ref={city}/>
            <button onClick={handleClick} className="w-[43px] h-[40px] rounded-full bg-stone-50 hover:bg-stone-400 border-transparent max-md:mr-3"> <FontAwesomeIcon icon={faMagnifyingGlass}/> </button>
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
          {coordinates.lat===null && <Loader />}
        </div>
        <footer className="text-sky-500 mt-2 text-md">
          Developed by <span className="text-stone-950 font-bold">Anurag Guleria</span>
        </footer>
    </>
  );
}