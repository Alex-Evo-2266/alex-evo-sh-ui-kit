import { ITextAreaProps } from "../../props"
import { TextArea } from "../../TextArea/TextArea"
import { useFieldForm } from "../FormField.hook"

type ITextAreaFieldProps = Omit<ITextAreaProps, "name" | "value" | "onChange" | "onClear" | "error" | "errorText"> & {
    name: string
}

export const TextAreaField = (props:ITextAreaFieldProps) => {

    const {error, value, change, clearHandler} = useFieldForm(props.name)
    
    return(
        <TextArea {...{...props}} onChange={change} onClear={clearHandler} value={String(value)} error={Boolean(error)} errorText={error}/>
    )
}