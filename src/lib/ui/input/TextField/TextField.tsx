import { XCircle } from "lucide-react"
import "./TextField.scss"
import { useCallback, useEffect, useRef, useState } from "react"

export interface ITextFieldProps{
    onChange?:(event: React.ChangeEvent<HTMLInputElement>)=>void
    name?: string
    value?: number | string
    placeholder?: string
    validEmptyValue?: boolean
    className?: string
    onFocus?: (event:React.FocusEvent<HTMLInputElement>)=>void
    onBlur?: (event:React.FocusEvent<HTMLInputElement>)=>void
    error?: boolean
    icon?:React.ReactNode
    onClear?: ()=>void
    border?: boolean
    password?: boolean
    readOnly?: boolean
    type?:string
    transparent?: boolean
    min?: number
    max?: number
    styleContainer?: React.CSSProperties
    ref?: React.LegacyRef<HTMLInputElement> | undefined
}

export const TextField = ({ref, styleContainer, type = "text", transparent, readOnly, password, border, onClear, icon, onChange, name, value, placeholder, className, validEmptyValue, onFocus, onBlur, error, max, min}:ITextFieldProps) => {

    const inputContainerElement = useRef<HTMLDivElement>(null)
    const [isError, setError] = useState<boolean>(false)
    const [isFocus, setFocus] = useState<boolean>(false)

    const focus = () => {
        if(!inputContainerElement.current)
            return
        const input = inputContainerElement.current.querySelector('input')
        if(!input)
            return
        input.focus()
    }

    const changeFocus = (e:React.FocusEvent<HTMLInputElement>) => {
        onFocus && onFocus(e)
        setFocus(true)
    }

    const blur = (event:React.FocusEvent<HTMLInputElement>) => {
        onBlur && onBlur(event)
        setFocus(false)
    }

    const emptyValueClass = useCallback((validEmptyValue?:boolean, value?: string | number) => {
        if(error)
            return setError(true)
        if(validEmptyValue && (!value || value === ""))
            return setError(true)
        return setError(false)
    },[])

    useEffect(()=>{
        emptyValueClass(validEmptyValue, value)
    },[value, validEmptyValue, emptyValueClass])

    return(
        <div ref={inputContainerElement} style={styleContainer} className={`input-field text-field ${border?"border":""} ${isFocus?"active":""} ${transparent?"transparent":""} ${isError?"error":""} ${className}`}>
            {
                (icon)?
                <div className="icon-container" onClick={focus}>{icon}</div>:
                null
            }
            <div className="input-container" onClick={focus}>
                <input
                ref={ref}
                max={max}
                min={min}
                readOnly={readOnly}
                required 
                type={password?"password":type} 
                className={`${isError?"error":""}`} 
                name={name} 
                value={value} 
                onChange={onChange}
                onFocus={changeFocus}
                onBlur={blur}/>
                <label>{(placeholder)?<span>{placeholder}</span>:null}</label>
            </div>
            {
                (onClear)?
                <div className="icon-container clear-btn"><XCircle onClick={onClear}/></div>:
                null
            }
		</div>
    )
}