import { useCallback, useContext } from "react"
import { formContext } from "../FormContext"
import { SigmentedButton } from "../../../Base/SigmentedButton/SigmentedButton"

export interface SwitchFieldProps {
    password?: boolean
    ref?: React.RefObject<HTMLInputElement>
    readOnly?: boolean
    className?: string
    style?: React.CSSProperties
    name: string
    items: string[]
}

export const SwitchField = ({items, ref, style, readOnly, className, name}:SwitchFieldProps) => {

    const {value, changeField} = useContext(formContext)

    const change = (value: string[]) => {
        changeField && changeField(name, value[0] ?? '')
    }

    const getValue = useCallback(()=>{
        return value[name]
    },[value, name])

    return(
        <SigmentedButton 
        items={items}
        style={style}
        ref={ref} 
        readOnly={readOnly} 
        className={className}
        name={name}
        onChange={change}
        value={getValue()}
        />
    )
}