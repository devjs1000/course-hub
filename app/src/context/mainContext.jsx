import { createContext, useState } from "react";

export const context= createContext()

const MainContext=({children})=>{
    const data={

    }



    
    return <>
    <context.Provider value={data}>
        {children}
    </context.Provider>
    </>
}

export default MainContext