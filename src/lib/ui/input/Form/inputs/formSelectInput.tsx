import { useCallback, useContext } from "react"
import { formContext } from "../FormContext"
import { IOption, SelectField as SF } from "../../SelectField/Select"
import { ScreenSize } from "../../../../model/sizeScreen"

export interface ISelectFieldProps{
    onChange?:(value: string)=>void
    value?: string
    placeholder?: string
    className?: string
    items: (IOption | string)[]
    border?: boolean
    name: string
    error?: boolean
    onFocus?: (e:React.FocusEvent<HTMLInputElement>)=>void
    onBlur?: (e:React.FocusEvent<HTMLInputElement>)=>void
    container_id: string
    screensize?: ScreenSize
    style?: React.CSSProperties
    ref?: React.RefObject<HTMLInputElement>
}


export const SelectField = ({items, ref, border, error, className, placeholder, name, container_id}:ISelectFieldProps) => {

    const {value, changeField} = useContext(formContext)

    const change = (value: any) => {
        changeField && changeField(name, value)
    }

    const getValue = useCallback(()=>{
        return value[name]
    },[value, name])

    return(
        <SF
        items={items}
        ref={ref} 
        border={border} 
        error={error} 
        className={className}
        placeholder={placeholder}
        name={name}
        onChange={change}
        value={getValue()}
        container={document.getElementById(container_id)}
        />
    )
}