export default function AirPollutionSkeleton(){
    return(
        <div className="flex flex-col items-center mt-6 h-[40%] w-[100%] max-md:mt-10 max-md:h-[15%]">
            <div className="flex w-full justify-between px-4 max-md:gap-1 max-md:flex-col">
                <h2 className="h-5 w-[30%] bg-stone-300 bg-opacity-35 text-md animate-pulse max-md:mx-auto max-md:w-[40%]"></h2>
                <p className="h-5 w-[30%] bg-stone-300 bg-opacity-35 animate-pulse max-md:mx-auto max-md:w-[70%]"></p>
            </div>
            <h3 className="text-stone-100 mt-10 max-md:mt-10">Pollutants: Values in (μg/m3)</h3>
            <div className="grid grid-cols-6 w-[90%] mt-8 ml-8 p-4 bg-black bg-opacity-75 text-center rounded-lg max-md:w-full max-md:ml-5 max-md:mt-2">
                <p className="text-stone-100">SO<sub className="text-2xs">2</sub></p>
                <p className="text-stone-100">NO<sub className="text-2xs">2</sub></p>
                <p className="text-stone-100">PM<sub className="text-2xs">10</sub></p>
                <p className="text-stone-100">PM<sub className="text-2xs">2.5</sub></p>
                <p className="text-stone-100">O<sub className="text-2xs">3</sub></p>
                <p className="text-stone-100">CO</p>
                <p className="bg-stone-300 bg-opacity-55 animate-pulse h-7 w-16 mx-auto max-md:w-10 rounded-md"></p>
                <p className="bg-stone-300 bg-opacity-55 animate-pulse h-7 w-16 mx-auto max-md:w-10 rounded-md"></p>
                <p className="bg-stone-300 bg-opacity-55 animate-pulse h-7 w-16 mx-auto max-md:w-10 rounded-md"></p>
                <p className="bg-stone-300 bg-opacity-55 animate-pulse h-7 w-16 mx-auto max-md:w-10 rounded-md"></p>
                <p className="bg-stone-300 bg-opacity-55 animate-pulse h-7 w-16 mx-auto max-md:w-10 rounded-md"></p>
                <p className="bg-stone-300 bg-opacity-55 animate-pulse h-7 w-16 mx-auto max-md:w-10 rounded-md"></p>
            </div>
        </div>
    );
}