import {GiSunrise,GiSunset} from 'react-icons/gi'
import { IconContext } from 'react-icons/lib';

import Span from '../Span';
import { Tooltip } from 'react-tooltip';

export default function SunDetails({sunData}){
    
    const sunrise = new Date(sunData.sunrise * 1000).toLocaleTimeString('en-US',{
        hour: '2-digit',
        minute: '2-digit'
    });
    const sunset = new Date(sunData.sunset * 1000).toLocaleTimeString('en-US',{
        hour: '2-digit',
        minute: '2-digit'
    });

    return(
        <IconContext.Provider value={{size:'3em',color: 'rgb(236,124,53)'}}>
            <Tooltip id='sun-tooltip'/>
            <div className='flex justify-evenly mt-10 sun-time'>
                <p data-tooltip-id='sun-tooltip' data-tooltip-content='Sun rise'><GiSunrise /> <Span>{sunrise}</Span></p>
                <p data-tooltip-id='sun-tooltip' data-tooltip-content='Sun set'><GiSunset /> <Span>{sunset}</Span></p>
            </div>
        </IconContext.Provider>
    );
}