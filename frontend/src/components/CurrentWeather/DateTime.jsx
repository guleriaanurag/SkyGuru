import { useEffect, useState } from "react";

export default function DateTime() {
    
    const[time,setTime] = useState(new Date().toLocaleTimeString());

    const date = new Date();
    const weekday = date.toLocaleDateString('en-US',{weekday:'short'});
    const  day = date.toLocaleDateString('en-US',{day:'numeric'})
    const month = date.toLocaleDateString('en-US',{month:'short'})

    const formattedDate = `${weekday}, ${day} ${month}`;

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000)

        return ()=> clearInterval(intervalId);
    },[])

    return (
        <div className="w-52 max-md:w-full max-md:text-center">
            <span className="text-md text-sky-100"> {formattedDate} | {time} </span>
        </div>
  )
}