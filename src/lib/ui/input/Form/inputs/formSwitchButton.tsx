import { useCallback, useContext } from "react"
import { formContext } from "../FormContext"
import { SegmentedButton } from "../../../../../lib"

export interface SwitchFieldProps {
    password?: boolean
    placeholder?: string
    ref?: React.RefObject<HTMLInputElement>
    readOnly?: boolean
    className?: string
    style?: React.CSSProperties
    name: string
}

export const SwitchButtonField = ({placeholder, ref, style, readOnly, className, name}:SwitchFieldProps) => {

    const {value, changeField} = useContext(formContext)

    const change = (value: string[]) => {
        if(value.length > 0) {
            return changeField && changeField(name, true)
        }
        changeField && changeField(name, false)
    }

    const getValue = useCallback(()=>{
        if(Boolean(value[name])) {
            return [placeholder ?? name]
        }
        return []
    },[value, name, placeholder])

    return(
        <SegmentedButton className={className} style={style} ref={ref} readOnly={readOnly} value={getValue()} multiple items={[placeholder ?? name]} onChange={change}/>
    )
}