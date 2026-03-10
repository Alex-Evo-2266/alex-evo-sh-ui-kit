import { createContext } from "react";

export interface IContext<T>{
    value?: T,
    changeField?: (name:string, data: unknown)=>void
    errors?: {[key:string]:string}
}

export const formContext = createContext<IContext<{[x:string]:unknown}>>({})
