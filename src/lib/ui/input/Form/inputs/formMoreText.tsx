import { useCallback, useContext } from "react"
import { formContext } from "../FormContext"
import { MoreText as MT } from "../../MoreText/MoreText"
import { IMoreTextProps } from "../../props"

export interface MoreTextFieldProps extends Omit<IMoreTextProps, "value" | "onChange"> {
    name: string
}

export const MoreTextField = (props:MoreTextFieldProps) => {

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
            return errors[props.name] ?? props.errorText
        }
    },[errors, props.name, props.errorText])

    return(
        <MT {...{...props, onChange:change, value:getValue(), errorText:getError()}}/>
    )
}