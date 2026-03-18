import { createContext, useContext } from "react";

type AnyObject = unknown

export interface IContext<T extends AnyObject>{
    value?: Partial<T>,
    changeField?: (name: keyof T, data: T[keyof T])=>void
    errors?: Partial<Record<string, string>>
}

export const formContext = createContext<IContext<AnyObject>>({})

export function useFormContext<T>() {
  return useContext(formContext) as IContext<T>
}