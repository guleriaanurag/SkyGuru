
function SkeletonCard(){
    return(
        <div className="bg-stone-300 bg-opacity-35 ml-6 py-2 h-[100%] w-[80%] rounded-lg flex flex-col gap-2 justify-center items-center max-md:mt-4 max-md:ml-7 animate-pulse">
            <p className="bg-stone-500 bg-opacity-40 animate-pulse h-4 w-[60%] rounded-md"></p>
            <p className="bg-stone-500 bg-opacity-40 animate-pulse h-20 w-[70%] rounded-xl"></p>
            <p className="bg-stone-500 bg-opacity-40 animate-pulse h-4 w-[60%] rounded-md"></p>
            <p className="bg-stone-500 bg-opacity-40 animate-pulse h-4 w-[60%] rounded-md"></p>
        </div>
    );
}

export default function WeatherForecastSkeleton(){
    return(
        <div className="w-[100%] h-[55%] rounded-lg mt-[25px] max-md:ml-3">
            <h2 className="text-md pl-4 text-stone-800 dark:text-sky-100 max-md:text-center">Weather Forecast</h2>
            <div className="grid grid-cols-5 mt-10 max-md:grid-cols-1 h-[70%] max-md:gap-4 max-md:mt-5">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </div>
    );
}