import { useCallback, useContext } from "react"
import { formContext } from "../FormContext"
import { Switch } from "../../../Base/Switch/Switch"

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

    const {value, changeField} = useContext(formContext)

    const change = (e:React.ChangeEvent<HTMLInputElement>) => {
        changeField && changeField(name, e.target.checked)
    }

    const getValue = useCallback(()=>{
        return Boolean(value[name])
    },[value, name])

    return(
        <div className={`input-field form-switch ${className}`} style={style}>
            <Switch readOnly={readOnly} ref={ref} placeholder={placeholder} name={name} checked={getValue()} onChange={change}/>
        </div>
    )
}