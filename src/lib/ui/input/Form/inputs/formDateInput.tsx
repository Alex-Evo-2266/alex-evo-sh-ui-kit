import { DateField as DF } from "../../DateField/DateField"
import { IDateFieldProps } from "../../props"
import { useFieldForm } from "../FormField.hook"

export interface DateFieldPropsForm extends Omit<IDateFieldProps, "name" | "value" | "onChange" | "onClear" | "error" | "errorText"> {
    name: string
}

export const DateField = (props:DateFieldPropsForm) => {

    const {error, value, change} = useFieldForm(props.name)

    return(
        <DF {...{...props}}
        error={Boolean(error)}
        onChange={change}
        value={String(value)}
        errorText={error}
        />
    )
}