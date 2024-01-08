import icon from '../assets/WeatherIcons.gif';

export default function Loader(){
    return(
        <div className='flex flex-col items-center h-full mt-[10%]'>
            <img src={icon} className='h-56 w-56' style={{}} />
            <p className='text-md font-light text-stone-100'>
                Welcome! We're waiting for your location to provide real-time weather data.
                <span>Grant us access for a personalized weather experience!</span>
            </p>
            <p className='text-md font-light text-stone-200'>
                Or, you can manually search for weather information of a specific location.
            </p>
        </div>
    );
}