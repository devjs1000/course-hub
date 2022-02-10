import { createContext, useState } from "react";

export const context= createContext()

export const MainContext=({children})=>{
    
    const data={

    }


    return <>
    <context.Provider value={data}>
        {children}
    </context.Provider>
    </>
}