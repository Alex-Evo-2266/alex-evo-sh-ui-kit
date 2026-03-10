import { useCallback, useContext } from "react"
import { formContext } from "../FormContext"
import { SelectField as SF } from "../../SelectField/Select"
import { ISelectFieldProps } from "../../props"
import { isString } from "../../../../helpers/typesCheck"

export interface ISelectFieldPropsForm extends Omit<ISelectFieldProps, "value" | "container">{
    name: string,
    container?: HTMLElement | null
}


export const SelectField = (props:ISelectFieldPropsForm) => {

    const {value, changeField, errors} = useContext(formContext)

    const change = useCallback((value: any) => {
        changeField && changeField(props.name, value)
    },[props.name])

    const getValue = useCallback(()=>{
        const val = value?.[props.name]
        if(isString(val))
            return val ?? ""
        return ""
    },[value, props.name])

    const getError = useCallback(() => {
        if (errors && Object.keys(errors).includes(props.name))
        {
            return errors[props.name]
        }
    },[errors, props.name])

    return(
        
        <SF {...{...props, container: props.container ?? document.body, value: getValue(), onChange:change, errorText: getError(), error: errors && Boolean(errors[props.name])}}/>
    )
}