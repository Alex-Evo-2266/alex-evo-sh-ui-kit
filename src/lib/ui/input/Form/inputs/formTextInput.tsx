import { useCallback, useContext } from "react"
import { TextField as TF } from "../../TextField/TextField"
import { formContext } from "../FormContext"

export interface TextFieldProps {
    password?: boolean
    ref?: React.RefObject<HTMLInputElement>
    border?: boolean
    readOnly?: boolean
    transparent?: boolean
    styleContainer?: React.CSSProperties
    error?: boolean
    icon?:React.ReactNode
    clear?: boolean
    className?: string
    placeholder?: string
    name: string
}

export const TextField = ({password, ref, border, readOnly, transparent, styleContainer, icon, clear, className, placeholder, name}:TextFieldProps) => {

    const {value, changeField, errors} = useContext(formContext)

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeField && changeField(name, event.target.value)
    }

    const getValue = useCallback(()=>{
        return value[name]
    },[value, name])

    const clearHandler = () => {
        changeField && changeField(name, '')
    }

    const getError = useCallback(() => {
        if (errors && Object.keys(errors).includes(name))
        {
            return errors[name]
        }
    },[errors, name])

    return(
        <TF 
        ref={ref} 
        password={password} 
        border={border} 
        readOnly={readOnly} 
        transparent={transparent} 
        styleContainer={styleContainer} 
        error={Boolean(getError())} 
        icon={icon} 
        onClear={clear? clearHandler: undefined}
        className={className}
        placeholder={placeholder}
        name={name}
        onChange={change}
        value={getValue()}
        />
    )
}