import Pollutants from "./Pollutants";
import HorizontalLine from "../HorizontalLine";
import useFetch from "../../hooks/useFetch";
import AirPollutionSkeleton from "../../ui/AirPollutionSkeleton";

export default function AirPollution({coords}){

    const {
        data:airPollutionData,
        error,
        isLoading
    } = useFetch('airpollution/',coords,null,{});

    let aqi;
    if(airPollutionData.list){
        switch (airPollutionData.list[0].main.aqi) {
            case 1:
                aqi = "1 (Good)";
                break;
            case 2:
                aqi = "2 (Fair)";
                break;
            case 3:
                aqi = "3 (Moderate)";
                break;
            case 4:
                aqi = "4 (Poor)";
                break;
            case 5:
                aqi = "5 (Very Poor)";
                break;
            default:
                aqi = "data not avialable";
                break;
        }
    }

    return(
        <>  
            <HorizontalLine />
            {isLoading ? (<AirPollutionSkeleton />) : (
                <>
                    {airPollutionData.list && <div className="air-pollution flex flex-col items-center mt-6 h-[40%] w-[100%] max-md:mt-10 max-md:h-[15%]">
                        <div className="flex w-full justify-between px-4 max-md:flex-col">
                            <h2 className="text-stone-800 text-md max-md:text-center">Air Pollution</h2>
                            <p className="text-stone-100 max-md:text-center">Air Quality Index : <span className="text-stone-800">{aqi}</span></p>
                        </div>
                        <h3 className="text-stone-100 mt-10 max-md:mt-10">Pollutants: Values in (μg/m3)</h3>
                        <div className="grid grid-cols-6 w-[90%] mt-8 ml-8 p-4 bg-black bg-opacity-75 text-center rounded-lg max-md:w-full max-md:ml-5 max-md:mt-2">
                            <p className="text-stone-100">SO<sub className="text-2xs">2</sub></p>
                            <p className="text-stone-100">NO<sub className="text-2xs">2</sub></p>
                            <p className="text-stone-100">PM<sub className="text-2xs">10</sub></p>
                            <p className="text-stone-100">PM<sub className="text-2xs">2.5</sub></p>
                            <p className="text-stone-100">O<sub className="text-2xs">3</sub></p>
                            <p className="text-stone-100">CO</p>
                            <Pollutants components={airPollutionData.list[0].components}/>
                        </div>
                    </div>}
                </>
            )}
        </>
    );
}