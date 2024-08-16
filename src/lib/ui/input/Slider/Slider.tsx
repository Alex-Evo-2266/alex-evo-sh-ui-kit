import { useCallback, useEffect, useRef, useState } from "react"
import "./Slider.scss"
import { getContainerData } from "../../../helpers/getModalCord"
import { map } from "../../../helpers/map"

const DEFAULT_MIN = 0
const DEFAULT_MAX = 100

export interface InputProps{
    min?: number
    max?: number
    step?: number
    value?: number
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
    maxMinDisplay?: boolean
    onFocus?: (e:React.FocusEvent<HTMLInputElement>)=>void
    onBlur?: (e:React.FocusEvent<HTMLInputElement>)=>void
    onMouseUp?: (e:React.MouseEvent<HTMLInputElement>)=>void
}

export const Slider = (props:InputProps) => {
    const [value, setValue] = useState<number>(0)
    const [focus, setFocus] = useState<boolean>(false)
    const sliderValue = useRef<HTMLDivElement>(null)
    const slider = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        if(props.value)
            setValue(props.value)
        else
            setValue(0)
    },[props.value])

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value))
        props.onChange(event)
    }

    const getWidth = (value: number, min: number, max: number) => {
        if(sliderValue.current && slider.current)
        {
            let data = getContainerData(slider.current)
            if(data)
                return ((map(value, min, max, 0, (max - min)) * (data.width - 20))/(max - min))
        }
        return(0)
    }
    
    const focusHandler = useCallback((e:React.FocusEvent<HTMLInputElement>) => {
        setFocus(true)
        props.onFocus && props.onFocus(e)
    },[props.onFocus])

    const blurHandler = useCallback((e:React.FocusEvent<HTMLInputElement>) => {
        setFocus(false)
        props.onBlur && props.onBlur(e)
    },[props.onBlur])

    return (
        <div className="range">
            <div className="field">
                {
                    props.maxMinDisplay?
                    <div className="value left">{props.min ?? DEFAULT_MIN}</div>:
                    null
                }
                <div className="field-range-container">
                    <div className="slider-value" ref={sliderValue} style={{width: getWidth(value, props.min ?? DEFAULT_MIN, props.max ?? DEFAULT_MAX)}}>
                        <div className="slider-tooltip" style={{display:(focus)?"block":"none"}}>
                            <span className="slider-tooltip-container"></span>
                            <span className="slider-tooltip-value">{value}</span>
                        </div>
                        
                    </div>
                    <input onMouseUp={props.onMouseUp} ref={slider} step={props.step} type="range" min={props.min ?? DEFAULT_MIN} max={props.max ?? DEFAULT_MAX} onChange={change} value={value} onFocus={focusHandler} onBlur={blurHandler}/>
                </div>
                {
                    props.maxMinDisplay?
                    <div className="value right">{props.max ?? DEFAULT_MAX}</div>:
                    null
                }
            </div>
        </div>
    )
}