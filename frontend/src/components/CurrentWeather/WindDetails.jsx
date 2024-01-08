import {WiDirectionUp,WiDirectionDown,WiDirectionLeft,WiDirectionRight,WiDirectionUpLeft,WiDirectionUpRight,WiDirectionDownLeft,WiDirectionDownRight} from 'react-icons/wi'
import { IconContext } from 'react-icons/lib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

import Span from '../Span';
import { Tooltip } from 'react-tooltip';

export default function WindDetails({windInfo,mode}) {
  
    let icon;
    const degrees = windInfo.deg % 360;
    const closestDirection = Math.round(degrees/45) * 45;
    const classes = "text-2xl text-stone-900";

    switch (closestDirection) {
        case 0:
          icon = <WiDirectionUp className={classes}/>;
          break;
        case 45:
          icon = <WiDirectionUpRight className={classes}/>;
          break;
        case 90:
          icon = <WiDirectionRight className={classes}/>;
          break;
        case 135:
          icon = <WiDirectionDownRight className={classes}/>;
          break;
        case 180:
          icon = <WiDirectionDown className={classes}/>;
          break;
        case 225:
          icon = <WiDirectionDownLeft className={classes}/>;
          break;
        case 270:
          icon = <WiDirectionLeft className={classes}/>;
          break;
        case 315:
          icon = <WiDirectionUpLeft className={classes}/>;
          break;
        default:
          icon = <WiDirectionRight className={classes}/>;
      }

    return (
        <IconContext.Provider value={{size: '1.5em',color:'rgb(12,74,110)'}}>
            <Tooltip id='wind-tooltip'/>
            <div className='w-full bg-stone-50 rounded-lg bg-opacity-35 flex flex-col items-center py-[15px] mt-12 max-md:mx-2'>
                <h4 className='text-stone-200'>Wind Details {mode==='metric' ? '(meter/sec)' : '(miles/hour)'}</h4>
                <div className='mt-[15px] flex justify-evenly w-full wind-details'>
                    <p><FontAwesomeIcon icon={faWind} className='text-sky-900 text-xl mr-2'/><Span>{windInfo.speed}</Span> <span   data-tooltip-id='wind-tooltip' data-tooltip-content='Wind Direction'>{icon}</span></p>
                    {windInfo.gust && <p className='mt-1'>Gust: <Span>{windInfo.gust}</Span></p>}
                </div>
            </div>
        </IconContext.Provider>
    )
}