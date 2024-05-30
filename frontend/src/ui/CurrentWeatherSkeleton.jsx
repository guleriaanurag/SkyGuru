import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong,faDownLong,faThermometerThreeQuarters,faDroplet,faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import {GiSunrise,GiSunset} from 'react-icons/gi'
import { IconContext } from 'react-icons/lib';

import DateTime from "../components/CurrentWeather/DateTime";

export default function CurrentWeatherSkeleton(){
    return(
        <div className="h-[95%] w-[90%] mt-[30px] rounded-lg flex flex-col items-center max-md:w-[95%] max-md:mt-[80px]">
                <div className='flex flex-row justify-between w-full px-4 pt-2 max-md:flex-col'>
                    <p className='text-md text-stone-900 dark:text-sky-100 max-md:text-center'>Current Weather</p>
                    <DateTime />
                </div>
                <div className='w-full'>
                    <div className='flex w-full justify-evenly mt-[40px]'>

                        <div className='mt-4 w-[45%] flex flex-col gap-1 items-center justify-center'>
                            <p className='bg-stone-300 bg-opacity-35 animate-pulse rounded-md h-8 w-24'></p>
                            <div className="bg-stone-300 bg-opacity-35 h-[80%] w-[60%] rounded-md animate-pulse"></div>
                            <p className='bg-stone-300 bg-opacity-35 animate-pulse rounded-md h-5 w-14'></p>
                        </div>

                        {/* Widget Skeleton  */}

                        <div className='flex flex-col pt-4 gap-2 w-[45%]'>
                            <div className="flex gap-2 items-center">
                                <p className='text-md inline text-stone-100'>Feels like : </p>
                                <p className='inline bg-stone-300 bg-opacity-35 animate-pulse rounded-md h-6 w-16'></p>
                            </div>
                            <div className='flex justify-start gap-4 w-full'>
                                <div className="flex gap-2">
                                    <p> <FontAwesomeIcon icon={faUpLong} className='text-xl text-sky-900 dark:text-sky-400'/></p>
                                    <p className="bg-stone-300 bg-opacity-35 animate-pulse h-6 w-16 rounded-md"></p>
                                </div>
                                <div className="flex gap-2">
                                    <p> <FontAwesomeIcon icon={faDownLong} className='text-xl text-sky-900 dark:text-sky-400'/></p>
                                    <p className="bg-stone-300 bg-opacity-35 animate-pulse h-6 w-16 rounded-md"></p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <p> <FontAwesomeIcon icon={faThermometerThreeQuarters} className='text-xl text-sky-900 dark:text-sky-400'/></p>
                                <p className="bg-stone-300 bg-opacity-35 animate-pulse h-6 w-16 rounded-md"></p>
                            </div>
                            <div className="flex gap-2">
                                <p> <FontAwesomeIcon icon={faDroplet} className='text-xl text-sky-900 dark:text-sky-400'/> </p>
                                <p className="bg-stone-300 bg-opacity-35 animate-pulse h-6 w-16 rounded-md"></p>
                            </div>
                            <div className="flex gap-2">
                                <p> <FontAwesomeIcon icon={faCompactDisc} className='text-lg text-sky-900 dark:text-sky-400'/></p>
                                <p className="bg-stone-300 bg-opacity-35 animate-pulse h-6 w-16 rounded-md"></p>
                            </div>
                        </div>

                    </div>

                    {/* WindDetails Skeleton  */}

                    <div className='w-full bg-stone-50 rounded-lg bg-opacity-35 flex flex-col items-center py-[15px] mt-12 max-md:mx-2'>
                        <h4 className='bg-stone-500 bg-opacity-35 animate-pulse h-5 w-[55%] rounded-md'></h4>
                        <div className='mt-[15px] flex justify-evenly w-full wind-details'>
                            <p className="bg-stone-500 bg-opacity-35 animate-pulse h-5 w-28 rounded-md"></p>
                            <p className="bg-stone-500 bg-opacity-35 animate-pulse h-5 w-28 rounded-md"></p>
                        </div>
                    </div>

                    {/* SunDetails Skeleton  */}

                    <IconContext.Provider value={{size:'3em',color: 'rgb(236,124,53)'}}>
                        <div className='flex justify-evenly mt-10'>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <p><GiSunrise /></p>
                                <p className="bg-stone-300 bg-opacity-35 animate-pulse h-6 w-24 rounded-md"></p>                            
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <p><GiSunset /></p>
                                <p className="bg-stone-300 bg-opacity-35 animate-pulse h-6 w-24 rounded-md"></p>
                            </div>
                        </div>
                    </IconContext.Provider>


                </div> 
            </div>
    );
}