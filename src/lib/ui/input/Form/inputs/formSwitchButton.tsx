import { useCallback } from "react"
import { SegmentedButton } from "../../../../../lib"
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

export const SwitchButtonField = ({placeholder, ref, style, readOnly, className, name}:SwitchFieldProps) => {

    const {value, change:changeField} = useFieldForm(name)

    const change = (value: string[]) => {
        if(value.length > 0) {
            return changeField && changeField(true)
        }
        changeField && changeField(false)
    }

    const getValue = useCallback(()=>{
        if(Boolean(value)) {
            return [placeholder ?? name]
        }
        return []
    },[value, name, placeholder])

    return(
        <SegmentedButton 
        className={className} 
        style={style} 
        ref={ref} 
        readOnly={readOnly} 
        value={getValue()} 
        multiple 
        items={[placeholder ?? name]} 
        onChange={change}
        />
    )
}