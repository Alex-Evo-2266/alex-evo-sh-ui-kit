import { useCallback, useContext } from "react"
import { NumberField as NF } from "../../NumberField/NumberField"
import { formContext } from "../FormContext"
import { INumberFieldProps } from "../../props"

export interface TextFieldProps extends Omit<INumberFieldProps, "value"> {
    name: string
}

export const NumberField = (props:TextFieldProps) => {

    const {value, changeField, errors} = useContext(formContext)

    const change = useCallback((value: any) => {
        changeField && changeField(props.name, value)
    },[props.name])

    const getValue = useCallback(()=>{
        return Number(value[props.name])
    },[value, props.name])

    const getError = useCallback(() => {
        if (errors && Object.keys(errors).includes(props.name))
        {
            return errors[props.name] ?? props.errorText
        }
    },[errors, props.name, props.errorText])

    return(
        <NF {...{...props, value:getValue(), onChange:change, errorText:getError()}}/>
    )
}