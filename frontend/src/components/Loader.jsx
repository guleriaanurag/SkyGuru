import icon from '../assets/WeatherIcons.gif';

export default function Loader({children}){
    return(
        <div className='flex flex-col items-center h-full mt-[10%]'>
            <img src={icon} className='h-56 w-56'/>
            {children}
        </div>
    );
}