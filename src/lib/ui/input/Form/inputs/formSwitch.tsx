import { Switch } from "../../../Base/Switch/Switch"
import { useFieldForm } from "../FormField.hook"

export interface SwitchFieldProps {
    password?: boolean
    placeholder?: string
    ref?: React.RefObject<HTMLInputElement>
    readOnly?: boolean
    className?: string
    style?: React.CSSProperties
    name: string
}

export const SwitchField = ({placeholder, ref, style, readOnly, className, name}:SwitchFieldProps) => {

    const {value, change: changeField} = useFieldForm(name)

    const change = (e:React.ChangeEvent<HTMLInputElement>) => {
        changeField && changeField(e.target.checked)
    }

    return(
        <div className={`input-field form-switch ${className}`} style={style}>
            <Switch 
            readOnly={readOnly}
            ref={ref} 
            placeholder={placeholder} 
            name={name} 
            checked={Boolean(value)} 
            onChange={change}
            />
        </div>
    )
}