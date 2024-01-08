import { useEffect, useState } from "react";

export default function DateTime() {
    
    const[time,setTime] = useState(new Date().toLocaleTimeString());

    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US',{
        month: 'short',
        year: '2-digit'
    })
    const dayOfTheWeek = new Intl.DateTimeFormat('en-US',{weekday:'long'}).format(date);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000)

        return ()=> clearInterval(intervalId);
    },[])

    return (
        <div className="max-md:text-center">
            <span className="text-md text-sky-100">{dayOfTheWeek}, {formattedDate} | {time}</span>
        </div>
  )
}