import { useCallback, useContext } from "react"
import { formContext } from "../FormContext"
import { SelectField as SF } from "../../SelectField/Select"
import { ISelectFieldProps } from "../../props"

export interface ISelectFieldPropsForm extends Omit<ISelectFieldProps, "value">{
    name: string
}


export const SelectField = (props:ISelectFieldPropsForm) => {

    const {value, changeField, errors} = useContext(formContext)

    const change = useCallback((value: any) => {
        changeField && changeField(props.name, value)
    },[props.name])

    const getValue = useCallback(()=>{
        return value[props.name]
    },[value, props.name])

    const getError = useCallback(() => {
        if (errors && Object.keys(errors).includes(props.name))
        {
            return errors[props.name]
        }
    },[errors, props.name])

    return(
        
        <SF {...{...props, value: getValue(), onChange:change, errorText: getError(), error: errors && Boolean(errors[props.name])}}/>
    )
}