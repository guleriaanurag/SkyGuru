import { useState,useEffect } from 'react';
import {getColorForSO2,getColorForNO,getColorForPM10,getColorForPM2_5,getColorForO3,getColorForCO} from '../../util/functions'

export default function Pollutants({components}){
    
    const[classState,setClassState] = useState({
        so2:'text-stone-100',
        no:'text-stone-100',
        pm10:'text-stone-100',
        pm2_5:'text-stone-100',
        o3:'text-stone-100',
        co:'text-stone-100'
    });

    useEffect(()=>{
        const changeClass = ()=>{
            const so2Class = getColorForSO2(components.so2)
            const noClass = getColorForNO(components.no)
            const pm10Class = getColorForPM10(components.pm10)
            const pm2_5Class = getColorForPM2_5(components.pm2_5)
            const o3Class = getColorForO3(components.o3)
            const coClass = getColorForCO(components.co)

            setClassState({
                so2: so2Class,
                no: noClass,
                pm10: pm10Class,
                pm2_5: pm2_5Class,
                o3: o3Class,
                co: coClass
            })
        }
        changeClass();
    },[components])
    

    return(
        <>
            <p className={classState.so2}>{components.so2}</p>
            <p className={classState.no}>{components.no}</p>
            <p className={classState.pm10}>{components.pm10}</p>
            <p className={classState.pm2_5}>{components.pm2_5}</p>
            <p className={classState.o3}>{components.o3}</p>
            <p className={classState.co}>{components.co}</p>
        </>
    );
}