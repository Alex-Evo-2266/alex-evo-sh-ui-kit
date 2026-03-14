import { useCallback, useEffect, useId, useState } from "react"
import "./DateField.scss"
import { ModalPortal } from "../../../portal/dialog"
import {СalendarPickers} from './DatePickers'
import { Calendar } from "../../Icons"
import { IDateFieldProps } from "../props"
import { Typography } from "../../Text/Text/Typography"

export const DateField:React.FC<IDateFieldProps> = (
    {
        border, 
        onChange, 
        name, 
        value, 
        className, 
        error, 
        container,
        errorText,
        helperText,
        size = 'medium',
        disabled,
        placeholder,
        onBlur,
        onFocus,
        ...props
    }) => {

    const [dateValue, setDateValue] = useState<string>(value ?? "")
    const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false)
    const [isFocused, setFocused] = useState<boolean>(false);
    const [isFilled, setIsFilled] = useState<boolean>(!!value);
    const reactId = useId()

    const isError = error || errorText

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

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        onFocus?.(e);
        setFocused(true);
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        onBlur?.(e);
        setFocused(false);
        setIsFilled(!!e.target.value);
    }

    useEffect(() => {
        setIsFilled(!!value);
    }, [value]);

    const change = useCallback((year: number, month: number, day: number) => {
        setDateValue(`${year}-${formatMonth(month)}-${formatDay(day)}`)
        onChange && onChange(`${year}-${formatMonth(month)}-${formatDay(day)}`)
    },[onChange])

    const sizeClasses = {
        small: "input-field__date-field_small",
        medium: "input-field__date-field_medium",
        large: "input-field__date-field_large",
    };

    return(
        <div className={`input-field-container ${className}`}>
        <div className={`
          input-field 
          input-field__date-field 
          ${sizeClasses[size]}
          ${border ? "input-field_border" : ""} 
          ${isFocused ? "input-field_active" : ""} 
          ${isError ? "input-field_error" : ""} 
          ${disabled ? "input-field_disabled" : ""}
        `}>
            <div className="input-field__icon-container" onClick={click}><Calendar/></div>
            <div className="input-field__input-container" onClick={click}>
                <input
                className="input-field__input-container__input"
                required 
                type="date" 
                role='textbox'
                name={name} 
                value={dateValue}
                onBlur={handleBlur}
                onFocus={handleFocus}
                readOnly
                id={reactId}
                {...props}
                />
                {placeholder && (
                    <label 
                    htmlFor={reactId} 
                    className={`input-field__input-container__label 
                    ${isFilled ? "input-field__input-container__label_filled" : ""}
                    `}
                    >
                    <span className="input-field__input-container__label__span">{placeholder}</span>
                    </label>
                )}
            </div>
		</div>
        {
            (datePickerVisible)?
            <ModalPortal container={container}>
                <СalendarPickers onChange={change} onHide={()=>setDatePickerVisible(false)}/>
            </ModalPortal>
            :null
        }
        {isError && errorText && <Typography type='small' className="input-field-container__error-text">{errorText}</Typography>}
        {helperText && !isError && <Typography type='small' className="input-field-container__helper-text">{helperText}</Typography>}
        </div>
        
    )
}