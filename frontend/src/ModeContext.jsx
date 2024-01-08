import { createContext, useReducer} from "react";

export const DataModeContext = createContext({
    mode: '',
    handleModeChange: ()=>{}
});

function DataModeReducer(state,action){
    if(action.type==='update'){
        if(state===action.mode){
            return state;
        }
        else{
            return (state==='metric' ? 'standard' : 'metric');
        }
    }
    return state;
}

export default function ModeContextProvider({children}){
    
    const[modeState,modeStateDispatch] = useReducer(DataModeReducer,{
        mode: 'metric'
    })

    function handleModeChange(mode){
        modeStateDispatch({type: 'update',value:mode})
    }

    const contextValue = {mode: modeState.mode,handleModeChange};
    
    return(
        <DataModeContext.Provider value={contextValue}>
            {children}
        </DataModeContext.Provider>
    );
}