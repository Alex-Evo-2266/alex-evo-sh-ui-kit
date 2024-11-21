import { useCallback, useContext } from "react"
import { NumberField as NF } from "../../NumberField/NumberField"
import { formContext } from "../FormContext"

export interface TextFieldProps {
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
    min?: number
    max?: number
}

export const NumberField = ({ref, border, readOnly, transparent, styleContainer, error, icon, clear, className, placeholder, name, min, max}:TextFieldProps) => {

    const {value, changeField} = useContext(formContext)

    const change = (value: any) => {
        changeField && changeField(name, value)
    }

    const getValue = useCallback(()=>{
        return Number(value[name])
    },[value, name])

    const clearHandler = () => {
        changeField && changeField(name, '')
    }

    return(
        <NF 
        ref={ref} 
        border={border} 
        readOnly={readOnly} 
        transparent={transparent} 
        styleContainer={styleContainer} 
        error={error} 
        icon={icon} 
        onClear={clear? clearHandler: undefined}
        className={className}
        placeholder={placeholder}
        name={name}
        onChange={change}
        value={getValue()}
        min={min}
        max={max}
        />
    )
}