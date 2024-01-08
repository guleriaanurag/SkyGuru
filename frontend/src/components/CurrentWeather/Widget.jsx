import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThermometerThreeQuarters,faUpLong,faDownLong,faDroplet,faCompactDisc} from '@fortawesome/free-solid-svg-icons'
import {Tooltip} from 'react-tooltip'

import Span from '../Span';

export default function Widget({data}) {
  return (
    <div className='flex flex-col pt-4 gap-2'>
        <Tooltip id='widget-tooltip'/>
        <p className='text-md text-stone-100'>Feels like : <span className='text-md text-stone-200'>{data.main.feels_like}&deg;</span></p>
        <div className='flex justify-around w-full'>
            <p className='mr-2'> <FontAwesomeIcon icon={faUpLong} className='text-xl text-sky-900'/> <Span>{data.main.temp_max}&deg;</Span></p>
            <p> <FontAwesomeIcon icon={faDownLong} className='text-xl text-sky-900'/> <Span>{data.main.temp_min}&deg;</Span></p>
        </div>
        <p  data-tooltip-id='widget-tooltip' data-tooltip-content='Temperature'> <FontAwesomeIcon icon={faThermometerThreeQuarters} className='text-xl text-sky-900 mr-2'/> <Span>{data.main.temp}&deg;</Span></p>
        <p data-tooltip-id='widget-tooltip' data-tooltip-content='Humidity'> <FontAwesomeIcon icon={faDroplet} className='text-xl text-sky-900 mr-2'/> <Span>{data.main.humidity} %</Span></p>
        <p data-tooltip-id='widget-tooltip' data-tooltip-content='Pressure'> <FontAwesomeIcon icon={faCompactDisc} className='text-lg text-sky-900 mr-2'/><Span>{data.main.pressure}pHa</Span> </p>
    </div>
  )
}