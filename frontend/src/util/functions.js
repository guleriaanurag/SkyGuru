import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// value ranges given by the API documentation for each pollutant
// we are using it to give respective colours the pollutants value to show if the concentration of the pollutant is good or bad

const SO2_level = 
[{range:[0,20],classToAdd:'text-lime-400'},
{range:[20,80],classToAdd:'text-lime-600'},
{range:[80,250],classToAdd:'text-yellow-400'},
{range:[250,350],classToAdd:'text-orange-500'},
{range:[350,Infinity],classToAdd:'text-rose-600'}];

const NO_level = 
[{range:[0,40],classToAdd:'text-lime-400'},
{range:[40,70],classToAdd:'text-lime-600'},
{range:[70,150],classToAdd:'text-yellow-400'},
{range:[150,200],classToAdd:'text-orange-500'},
{range:[200,Infinity],classToAdd:'text-rose-600'}];

const PM10_level = 
[{range:[0,20],classToAdd:'text-lime-400'},
{range:[20,50],classToAdd:'text-lime-600'},
{range:[50,100],classToAdd:'text-yellow-400'},
{range:[100,200],classToAdd:'text-orange-500'},
{range:[200,Infinity],classToAdd:'text-rose-600'}];

const PM2_5_level = 
[{range:[0,10],classToAdd:'text-lime-400'},
{range:[10,25],classToAdd:'text-lime-600'},
{range:[25,50],classToAdd:'text-yellow-400'},
{range:[50,75],classToAdd:'text-orange-500'},
{range:[75,Infinity],classToAdd:'text-rose-600'}];

const O3_level = 
[{range:[0,60],classToAdd:'text-lime-400'},
{range:[60,100],classToAdd:'text-lime-600'},
{range:[100,140],classToAdd:'text-yellow-400'},
{range:[140,180],classToAdd:'text-orange-500'},
{range:[180,Infinity],classToAdd:'text-rose-600'}];

const CO_level = 
[{range:[0,4400],classToAdd:'text-lime-400'},
{range:[4400,9400],classToAdd:'text-lime-600'},
{range:[9400,12400],classToAdd:'text-yellow-400'},
{range:[12400,15400],classToAdd:'text-orange-500'},
{range:[15400,Infinity],classToAdd:'text-rose-600'}];

export async function getCoordinates(cityName){
        const response =  await axios.get(BASE_URL+`geocode/${cityName}`);
        if(!response.data.lat || response.data.long){
            throw new Error('Unknown Location');
            return;
        }
        return response.data;
}

// functions to calculate classes to add to the polltants component

export function getColorForSO2(value){
    const level = SO2_level.find((levelRange)=>{
        const[min,max] = levelRange.range;
        return value >= min && value < max; 
    })
    return level.classToAdd;
}

export function getColorForNO(value){
    const level = NO_level.find((levelRange)=>{
        const[min,max] = levelRange.range;
        return value>=min && value < max;
    })
    return level.classToAdd;
}

export function getColorForPM10(value){
    const level = PM10_level.find((levelRange)=>{
        const[min,max] = levelRange.range;
        return value>=min && value<max;
    })
    return level.classToAdd;
}

export function getColorForPM2_5(value){
    const level = PM2_5_level.find((levelRange)=>{
        const[min,max] = levelRange.range;
        return value>=min && value<max;
    })
    return level.classToAdd;
}

export function getColorForO3(value){
    const level = O3_level.find((levelRange)=>{
        const[min,max] = levelRange.range;
        return value>=min && value < max;
    })
    return level.classToAdd;
}

export function getColorForCO(value){
    const level = CO_level.find((levelRange)=>{
        const[min,max] = levelRange.range;
        return value>=min && value<max;
    })
    return level.classToAdd;
}