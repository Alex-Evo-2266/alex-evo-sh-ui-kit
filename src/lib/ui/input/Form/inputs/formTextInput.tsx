import { TextField as TF } from "../../TextField/TextField"
import { ITextFieldProps } from "../../props"
import { useFieldForm } from "../FormField.hook"

export interface TextFieldPropsForm extends Omit<ITextFieldProps, "name" | "value" | "onChange" | "onClear" | "error" | "errorText"> {
    name: string
}

export const TextField = (props:TextFieldPropsForm) => {

    const {error, value, change, clearHandler} = useFieldForm(props.name)

    return(
        <TF {...{...props}}
        error={Boolean(error)}
        onChange={change}
        value={String(value)}
        errorText={error}
        onClear={clearHandler}
        />
    )
}