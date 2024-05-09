import HorizontalLine from "./HorizontalLine";
import useFetch from "../hooks/useFetch";
import WeatherForecastSkeleton from "../ui/WeatherForecastSkeleton";

export default function WeatherForecast({coords,mode}){
    
    const{
        data:forecastData,
        error,
        isLoading
    } = useFetch('weather-forecast/',coords,mode,[]);

    if(error){
        return 
    }

    return(
        <>  
            <HorizontalLine />
            <div className="w-[100%] h-[55%] rounded-lg mt-[25px] max-md:ml-3">
                {isLoading ? (<WeatherForecastSkeleton />) : (
                    <>
                        {forecastData.length!==0 && <h2 className="text-md pl-4 text-stone-800 dark:text-sky-100 max-md:text-center">Weather Forecast</h2>}
                        <div className="grid grid-cols-5 mt-10 max-md:grid-cols-1">
                            {forecastData.length!==0 && forecastData.map((item,index)=>(
                                <div className="bg-stone-200 bg-opacity-45 ml-6 mx-auto w-[80%] rounded-lg flex flex-col justify-center items-center max-md:mt-4 max-md:ml-7" key={index}>
                                    <p className="dark:text-gray-200">{Intl.DateTimeFormat('en-US',{weekday:'short'}).format(new Date(item[0]))}</p>
                                    <img src={`https://openweathermap.org/img/wn/${item[4]}@2x.png`} alt={item[3]} />
                                    <p className="dark:text-gray-200">{item[3]}</p>
                                    <p className="dark:text-gray-200"><span>{item[1]}&deg;</span> / <span>{item[2]}&deg;</span></p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div> 
        </>
    );
}