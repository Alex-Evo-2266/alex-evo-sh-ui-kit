import { useCallback, useState } from "react"
import "./DateField.scss"
import { DialogModal } from "../../../portal/dialog"
import {СalendarPickers} from './DatePickers'
import { Calendar } from "../../Icons"

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

export const DateField = ({border, onChange, name, value, className, validEmptyValue, error, container}:ITimeFieldProps) => {

    const [dateValue, setDateValue] = useState<string>(value ?? "")
    const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false)

    const emptyValueClass = useCallback((validEmptyValue?:boolean) => {
        if(error)
            return "error"
        if(validEmptyValue && (!dateValue || dateValue === ""))
            return "error"
        return ""	
    },[dateValue])

    const click = () => {
        setDatePickerVisible(true)
    }

    const formatMonth = (month: number):string => {
        let str = String(month + 1)
        if(str.length < 2)
            str = "0" + str
        return str
    }

    const formatDay = (day: number):string => {
        let str = String(day)
        if(str.length < 2)
            str = "0" + str
        return str
    }

    const change = useCallback((year: number, month: number, day: number) => {
        setDateValue(`${year}-${formatMonth(month)}-${formatDay(day)}`)
        onChange && onChange(`${year}-${formatMonth(month)}-${formatDay(day)}`)
    },[onChange])

    return(
        <>
        <div className={`input-field date-field ${border?"border":""}`}>
            <div className="icon-container" onClick={click}><Calendar/></div>
            <div className="input-container" onClick={click}>
                <input
                required 
                type="date" 
                className={`${className} ${emptyValueClass(validEmptyValue)}`} 
                name={name} 
                value={dateValue}
                readOnly
                />
            </div>
		</div>
        {
            (datePickerVisible)?
            <DialogModal container={container}>
                <СalendarPickers onChange={change} onHide={()=>setDatePickerVisible(false)}/>
            </DialogModal>
            :null
        }
        </>
        
    )
}