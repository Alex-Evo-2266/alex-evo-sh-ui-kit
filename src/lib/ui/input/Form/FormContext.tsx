import { createContext } from "react";

export interface IContext<T>{
    value?: T,
    changeField?: (name:string, data: any)=>void
    errors?: {[key:string]:string}
}

export const formContext = createContext<IContext<any>>({})
