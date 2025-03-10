import { useCallback, useState } from "react"
import "./TimeField.scss"
import { DialogModal } from "../../../portal/dialog"
import { TimePicker } from "./TimePickers"
import { Clock } from "../../Icons"

interface ITimeFieldProps{
    onChange?:(value: string)=>void
    name?: string
    value?: string
    validEmptyValue?: boolean
    className?: string
    error?: boolean
    border?: boolean
    container: HTMLElement | null
}

export const TimeField = ({border, onChange, name, value, className, validEmptyValue, error, container}:ITimeFieldProps) => {

    const [timeValue, setTimeValue] = useState<string>(value ?? "")
    const [pickerVisible, setPickerVisible] = useState<boolean>(false)

    const emptyValueClass = useCallback((validEmptyValue?:boolean) => {
        if(error)
            return "error"
        if(validEmptyValue && (!timeValue || timeValue === ""))
            return "error"
        return ""	
    },[timeValue])

    const change = (hours: number, minutes: number) => {
        let hoursStr = String(hours)
        let minutesStr = String(minutes)
        if(hoursStr.length < 2)
            hoursStr = "0" + hoursStr
        if(minutesStr.length < 2)
        minutesStr = "0" + minutesStr
        setTimeValue(`${hoursStr}:${minutesStr}`)
        onChange && onChange(`${hoursStr}:${minutesStr}`)
    }

    const click = () => {
        setPickerVisible(true)
    }


    return(
        <>
        <div className={`input-field time-field ${border?"border":""}`}>
            <div className="icon-container" onClick={click}><Clock/></div>
            <div className="input-container" onClick={click}>
                <input
                required 
                type="time" 
                className={`${className} ${emptyValueClass(validEmptyValue)}`} 
                name={name} 
                value={timeValue}
                readOnly
                />
                <span className="text-field-line"></span>
            </div>
		</div>  
        {(pickerVisible)?
        <DialogModal container={container}>
            <TimePicker 
                onHide={()=>setPickerVisible(false)}
                onChange={change}
                hours={0}
                minutes={0}
            />
        </DialogModal>:
        null}
        </>
    )
}