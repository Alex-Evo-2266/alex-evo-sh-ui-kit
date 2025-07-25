import { useCallback, useContext } from "react"
import { TextField as TF } from "../../TextField/TextField"
import { formContext } from "../FormContext"
import { ITextFieldProps } from "../../props"

export interface TextFieldPropsForm extends Omit<ITextFieldProps, "value"> {
    name: string
}

export const TextField = (props:TextFieldPropsForm) => {

    const {value, changeField, errors} = useContext(formContext)

    const change = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        changeField && changeField(props.name, event.target.value)
    },[props.name])

    const getValue = useCallback(()=>{
        return value[props.name]
    },[value, props.name])

    const clearHandler = useCallback(() => {
        changeField && changeField(props.name, '')
    },[props.name])

    const getError = useCallback(() => {
        if (errors && Object.keys(errors).includes(props.name))
        {
            return errors[props.name]
        }
    },[errors, props.name])

    return(
        <TF {...{...props}}
        onChange={change}
        value={getValue()}
        errorText={getError()}
        onClear={clearHandler}
        />
    )
}