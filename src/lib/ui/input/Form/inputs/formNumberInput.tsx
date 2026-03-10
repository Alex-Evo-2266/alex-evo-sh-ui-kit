import { NumberField as NF } from "../../NumberField/NumberField"
import { INumberFieldProps } from "../../props"
import { useFieldForm } from "../FormField.hook"

export interface TextFieldProps extends Omit<INumberFieldProps, "value"> {
    name: string
}

export const NumberField = (props:TextFieldProps) => {

    const {value, change, error} = useFieldForm(props.name)

    return(
        <NF {...{...props, value:Number(value), onChange:change, errorText:error, error: Boolean(error)}}/>
    )
}