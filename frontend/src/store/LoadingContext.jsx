import { createContext, useState } from "react";

const LoadingContext = createContext({
    isLoading: false,
    changeLoading: ()=>{}
});

export function LoadingContextProvider({children}){    
    
    function changeLoadingState(stateValue){
        ctxValue.isLoading = stateValue;
    }

    const ctxValue = {
        isLoading: false,
        changeLoading: changeLoadingState
    };

    return(
        <LoadingContext.Provider value={ctxValue}>
            {children}
        </LoadingContext.Provider>
    );
}

export default LoadingContext;