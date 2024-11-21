import { createContext, useContext } from "react";

export interface IContext<T>{
    value?: T,
    changeField?: (name:string, data: any)=>void
}

export const formContext = createContext<IContext<any>>({})
