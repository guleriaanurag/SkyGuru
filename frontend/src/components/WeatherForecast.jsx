import { useEffect, useState } from "react";
import {fetchForecastData} from '../assets/fuctions'

import HorizontalLine from "./HorizontalLine";
import Span from "./Span";

export default function WeatherForecast({coords,mode}){
    
    const[forecastData,setForecastData] = useState([]);
    
    useEffect(()=>{
        const{lat,lon} = coords;
        const fetchAndSetData = async()=>{
            await fetchForecastData(lat,lon,mode,setForecastData);
        }
        fetchAndSetData();
    },[coords,mode])

    return(
        <>  
            <HorizontalLine />
            <div className="w-[100%] h-[55%] rounded-lg mt-[25px] max-md:ml-3">
                {forecastData.length!==0 && <h2 className="text-md pl-4 text-stone-800 max-md:text-center">Weather Forecast</h2>}
                <div className="grid grid-cols-5 mt-10 max-md:grid-cols-1">
                    {forecastData.length!==0 && forecastData.map((item,index)=>(
                        <div className="bg-stone-200 bg-opacity-45 mx-auto w-[80%] rounded-lg flex flex-col justify-center items-center max-md:mt-4" key={index}>
                            <p>{Intl.DateTimeFormat('en-US',{weekday:'short'}).format(new Date(item[0]))}</p>
                            <img src={`https://openweathermap.org/img/wn/${item[4]}@2x.png`} alt={item[3]} />
                            <p>{item[3]}</p>
                            <p><span>{item[1]}&deg;</span> / <span>{item[2]}&deg;</span></p>
                        </div>
                    ))}
                </div>
            </div>  
        </>
    );
}