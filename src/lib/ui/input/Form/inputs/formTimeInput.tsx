import { ITimeFieldProps } from "../../props"
import { TimeField as TF } from "../../TimeField/TimeField"
import { useFieldForm } from "../FormField.hook"

export interface TimeFieldPropsForm extends Omit<ITimeFieldProps, "name" | "value" | "onChange" | "onClear" | "error" | "errorText"> {
    name: string
}

export const TimeField = (props:TimeFieldPropsForm) => {

    const {error, value, change} = useFieldForm(props.name)

    return(
        <TF {...{...props}}
        error={Boolean(error)}
        onChange={change}
        value={String(value)}
        errorText={error}
        />
    )
}