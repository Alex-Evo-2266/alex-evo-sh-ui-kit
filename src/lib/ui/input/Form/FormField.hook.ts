import { useCallback } from "react"
import { useFormContext } from "./FormContext"
import { isBoolean, isNumber, isString } from "../../../helpers/typesCheck"


export const useFieldForm = (name: string) => {

        const {value: v, changeField, errors} = useFormContext<Record<string, unknown>>()
    
        const change = useCallback((value: unknown) => {
            changeField && changeField(name as never, value as never)
        },[name])
    
        const getValue = useCallback(()=>{
            const val = v?.[name]
            if(isBoolean(val))
                return Boolean(val)
            if(isNumber(val))
                return Number(val)
            if(isString(val))
                return val ?? ""
            return ""
        },[v, name])
    
        const clearHandler = useCallback(() => {
            changeField && changeField(name, '')
        },[name])
    
        const getError = useCallback(() => {
            if (errors && Object.keys(errors).includes(name))
            {
                return errors[name]
            }
        },[errors, name])

    return {
        value: getValue(),
        clearHandler,
        error: getError(),
        change
    }
}