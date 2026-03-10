import { SelectField as SF } from "../../SelectField/Select"
import { ISelectFieldProps } from "../../props"
import { useFieldForm } from "../FormField.hook"

export interface ISelectFieldPropsForm extends Omit<ISelectFieldProps, "value" | "container">{
    name: string,
    container?: HTMLElement | null
}


export const SelectField = (props:ISelectFieldPropsForm) => {

    const {value, change, error} = useFieldForm(props.name)

    return(
        
        <SF {...{...props, container: props.container ?? document.body, value: value, onChange:change, errorText: error, error: Boolean(error)}}/>
    )
}