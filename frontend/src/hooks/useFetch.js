import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL

async function axiosRequest(route,coords,mode){
    const {lat,lon} = coords;
    try {
        let resData;
        if(mode){
            resData = await axios.get(BASE_URL+route+`${lat}/${lon}/${mode}`);
        }
        else{
            resData = await axios.get(BASE_URL+route+`${lat}/${lon}`);
        }
        return resData.data;
    } catch (error) {
        throw new Error(error || 'Somthing went wrong');
    }
}

function useFetch(route,coords,mode,initialData){
    const[isLoading,setIsLoading] = useState(false);
    const[data,setData] = useState(initialData);
    const[error,setError] = useState('');

    const fetchData = useCallback(async function fetchData(){
        setIsLoading(true);
        try {
            const resData = await axiosRequest(route,coords,mode);
            setData(resData);
        } catch (error) {
            setError(error || 'Something went wrong.')
        }
        setIsLoading(false);
    },[route,coords,mode,axiosRequest])

    useEffect(()=>{
        fetchData();
    },[fetchData])

    return{
        isLoading,
        data,
        error
    }
}

export default useFetch;