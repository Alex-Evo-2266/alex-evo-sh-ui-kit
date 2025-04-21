import { useCallback, useContext } from "react"
import { formContext } from "../FormContext"
import { SelectField as SF } from "../../SelectField/Select"
import { ISelectFieldProps } from "../../props"

export interface ISelectFieldPropsForm extends Omit<ISelectFieldProps, "value">{
    name: string
}


export const SelectField = (props:ISelectFieldPropsForm) => {

    const {value, changeField} = useContext(formContext)

    const change = useCallback((value: any) => {
        changeField && changeField(props.name, value)
    },[props.name])

    const getValue = useCallback(()=>{
        return value[props.name]
    },[value, props.name])

    return(
        <SF {...{...props, value: getValue(), onChange:change}}/>
    )
}