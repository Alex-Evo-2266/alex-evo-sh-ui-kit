// import { Minus, Plus, XCircle } from "lucide-react"
import "./NumberField.scss"
import '../TextField/TextField.scss'
import { useCallback, useEffect, useRef, useState } from "react"
import { X } from "../../Icons"

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
    ref?: React.RefObject<HTMLInputElement>
}

export const NumberField = ({ref, styleContainer, transparent, readOnly, border, onClear, icon, onChange, name, value, placeholder, className, validEmptyValue, onFocus, onBlur, error, max, min}:ITextFieldProps) => {

    const timeOutID = useRef<NodeJS.Timeout | null>(null)
    const timeIntervalID = useRef<NodeJS.Timeout | null>(null)
    const timeOutSendID = useRef<NodeJS.Timeout | null>(null)
    
    const inputContainerElement = useRef<HTMLDivElement>(null)
    const [isError, setError] = useState<boolean>(false)
    const [val, setVal] = useState<number>(value ?? 0)

    const emptyValueClass = useCallback((validEmptyValue?:boolean, value?: string | number) => {
        if(error)
            return setError(true)
        if(validEmptyValue && (!value || value === ""))
            return setError(true)
        return setError(false)
    },[])

    const focus = () => {
        if(!inputContainerElement.current)
            return
        const input = inputContainerElement.current.querySelector('input')
        if(!input)
            return
        input.focus()
    }

    const changeHandler = useCallback((val: number, name?: string)=>{
        if(!onChange) return;
        if(timeOutSendID.current){
            clearTimeout(timeOutSendID.current)
            timeOutSendID.current = null
        }
        timeOutSendID.current = setTimeout(()=>{
            if(timeOutSendID.current){
                clearTimeout(timeOutSendID.current)
                timeOutSendID.current = null
            }
            onChange(val, name)
        },100)

    },[onChange])

    const pluseClick = useCallback(()=>{
        setVal(prev=>{
            let newData = prev?prev + 1:1
            if(typeof(max) === 'number' && newData > max)
                newData = max
            changeHandler(newData, name)
            return newData
        })
    },[changeHandler, name, max])

    const minusClick = useCallback(()=>{
        setVal(prev=>{
            let newData = prev?prev - 1:-1
            if(typeof(min) === 'number' && newData < min)
                newData = min
            changeHandler(newData, name)
            return newData
        })
    },[changeHandler, name, min])

    const changeNumber = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let newData = Number(event.target.value)
        if(typeof(min) === 'number' && newData < min)
            newData = min
        if(typeof(max) === 'number' && newData > max)
            newData = max
        setVal(Number(event.target.value))
        changeHandler(newData, name)
    },[name, changeHandler, val, max, min])

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
        console.log('d',timeOutSendID.current)
        if(value !== undefined && !timeOutSendID.current)
            setVal(value)
    },[value])

    return(
        <div ref={inputContainerElement} style={styleContainer} className={`input-field number-field ${border?"border":""} ${transparent?"transparent":""} ${className}`}>
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
                <div className="clear-container"><X onClick={onClear}/></div>:
                null
            }
            <div className="button-block">
                <div className="minus number-field-btn" onMouseDown={()=>mouseDown("m")}><i>+</i></div>
                <div className="plus number-field-btn" onMouseDown={()=>mouseDown("p")}><i>-</i></div>
            </div>
		</div>
    )
}