import { Minus, Plus, XCircle } from "lucide-react"
import "./NumberField.scss"
import '../TextField/TextField.scss'
import { useCallback, useEffect, useRef, useState } from "react"

export interface ITextFieldProps{
    onChange?:(value: number, name?: string)=>void
    name?: string
    value?: number
    placeholder?: string
    validEmptyValue?: boolean
    className?: string
    onFocus?: (event:React.FocusEvent<HTMLInputElement>)=>void
    onBlur?: (event:React.FocusEvent<HTMLInputElement>)=>void
    error?: boolean
    icon?:React.ReactNode
    onClear?: ()=>void
    border?: boolean
    readOnly?: boolean
    transparent?: boolean
    min?: number
    max?: number
    styleContainer?: React.CSSProperties
}

export const NumberField = ({styleContainer, transparent, readOnly, border, onClear, icon, onChange, name, value, placeholder, className, validEmptyValue, onFocus, onBlur, error, max, min}:ITextFieldProps) => {

    const inputElement = useRef<HTMLInputElement>(null)
    const [isError, setError] = useState<boolean>(false)
    const timeOutID = useRef<NodeJS.Timeout | null>(null)
    const timeIntervalID = useRef<NodeJS.Timeout | null>(null)
    const [val, setVal] = useState<number>(value ?? 0)

    const emptyValueClass = useCallback((validEmptyValue?:boolean, value?: string | number) => {
        if(error)
            return setError(true)
        if(validEmptyValue && (!value || value === ""))
            return setError(true)
        return setError(false)
    },[])

    const focus = () => {
        if(!inputElement.current)
            return
        inputElement.current.focus()
    }

    const pluseClick = useCallback(()=>{
        setVal(prev=>{
            const newData = prev?prev + 1:1
            setTimeout(()=>onChange && onChange(newData, name),100)
            return newData
        })
    },[onChange, name])

    const minusClick = useCallback(()=>{
        setVal(prev=>{
            const newData = prev?prev - 1:-1
            setTimeout(()=>onChange && onChange(newData, name),100)
            return newData
        })
    },[onChange, name])

    const changeNumber = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setVal(Number(event.target.value))
        setTimeout(()=>onChange && onChange(Number(event.target.value), name),0)
    },[name, onChange, val])

    const mouseUp = useCallback(()=>{
        if(timeOutID.current)
            clearTimeout(timeOutID.current)
        if(timeIntervalID.current)
            clearInterval(timeIntervalID.current)
        document.removeEventListener("mouseup", mouseUp)
    },[])

    const mouseDown = useCallback((type: "p" | "m")=>{
        if(type === "p")
            pluseClick()
        else if(type === "m")
            minusClick()
        if(timeOutID.current)
            clearTimeout(timeOutID.current)
        if(timeIntervalID.current)
            clearInterval(timeIntervalID.current)
        document.addEventListener("mouseup", mouseUp)
        timeOutID.current = setTimeout(()=>{
            timeIntervalID.current = setInterval(()=>{
                if(type === "p")
                    pluseClick()
                else if(type === "m")
                    minusClick()
            },100)
        },500)
            
    },[pluseClick, minusClick])
    

    useEffect(()=>{
        emptyValueClass(validEmptyValue, value)
    },[value, validEmptyValue, emptyValueClass])

    useEffect(()=>{
        if(value)
            setVal(value)
    },[value])

    return(
        <div style={styleContainer} className={`input-field number-field ${border?"border":""} ${transparent?"transparent":""} ${className}`}>
            {
                (icon)?
                <div className="icon-container" onClick={focus}>{icon}</div>:
                null
            }
            <div className="input-container" onClick={focus}>
                <input
                ref={inputElement}
                max={max}
                min={min}
                readOnly={readOnly}
                required 
                type="number" 
                className={`alex-evo-number-field ${isError?"error":""}`} 
                name={name} 
                value={val} 
                onChange={changeNumber}
                onFocus={onFocus}
                onBlur={onBlur}/>
                <label>{(placeholder)?<span>{placeholder}</span>:null}</label>
                <span className="text-field-line"></span>
            </div>
            {
                (onClear)?
                <div className="clear-container"><XCircle onClick={onClear}/></div>:
                null
            }
            <div className="button-block">
                <div className="minus number-field-btn" onMouseDown={()=>mouseDown("m")}><Minus/></div>
                <div className="plus number-field-btn" onMouseDown={()=>mouseDown("p")}><Plus/></div>
            </div>
		</div>
    )
}