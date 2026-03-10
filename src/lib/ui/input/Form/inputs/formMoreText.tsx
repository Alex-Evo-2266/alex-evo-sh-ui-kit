import { MoreText as MT } from "../../MoreText/MoreText"
import { IMoreTextProps } from "../../props"
import { useFieldForm } from "../FormField.hook"

export interface MoreTextFieldProps extends Omit<IMoreTextProps, "value" | "onChange"> {
    name: string
}

export const MoreTextField = (props:MoreTextFieldProps) => {

    const {value, change, error} = useFieldForm(props.name)

    return(
        <MT {...{...props, onChange:change, value: String(value), errorText:error, error: Boolean(error)}}/>
    )
}