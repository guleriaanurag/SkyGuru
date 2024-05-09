import { IconContext } from 'react-icons/lib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

import Span from '../Span';
import { Tooltip } from 'react-tooltip';

export default function WindDetails({windInfo,mode}) {
  
    return (
        <IconContext.Provider value={{size: '1.5em',color:'rgb(12,74,110)'}}>
            <Tooltip id='wind-tooltip'/>
            <div className='w-full bg-stone-50 rounded-lg bg-opacity-35 flex flex-col items-center py-[15px] mt-12 max-md:mx-2'>
                <h4 className='text-stone-200 dark:text-stone-100'>Wind Details {mode==='metric' ? '(meter/sec)' : '(miles/hour)'}</h4>
                <div className='mt-[15px] flex justify-evenly items-center w-full wind-details'>
                    <p data-tooltip-id='wind-tooltip' data-tooltip-content='Wind Speed'><FontAwesomeIcon icon={faWind} className='text-sky-900 dark:text-sky-400 text-xl mr-2'/><Span>{windInfo.speed}</Span></p>
                    {windInfo.gust && <p className='mt-1 dark:text-gray-200'>Gust: <Span>{windInfo.gust}</Span></p>}
                </div>
            </div>
        </IconContext.Provider>
    )
}