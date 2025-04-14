import React, { useCallback, useEffect, useState } from "react"
import { Menu } from "../../Menu/Menu"
import { IPoint } from "../../../model/point"
import { ScreenSize } from "../../../model/sizeScreen"
import { IMenuItem } from "../../../model/menu"
import { getContainerData } from "../../../helpers/getContainerPozAndSize"
import { Typography } from "../../Text/Text/Typography"
import { IOption, ISelectFieldProps } from "../props"

const getTitleByValue = (items:(IOption | string)[], value: string) => {
    for(let item of items)
    {
        if(typeof(item) === "string" && item === value)
            return item
        if(typeof(item) !== "string" && item.value === value)
            return item.title
    }
    return ""
}        

interface IMenuSize extends IPoint{
    width: number
}

export const SelectField = React.forwardRef<HTMLDivElement, ISelectFieldProps>(
    (
        {
            inputRef, 
            style, 
            screensize = ScreenSize.STANDART, 
            items, 
            onChange, 
            value,
            placeholder, 
            className, 
            border, 
            name, 
            error, 
            onBlur, 
            onFocus, 
            container = document.body,
            size = 'medium',
            transparent,
            helperText,
            errorText,
            disabled
        },
        ref
    ) => {

    const [selectTitle, setSelectTitle] = useState<string>("")
    const [pozition, setPozition] = useState<IMenuSize>({x:0, y:0, width: 100})
    const [visible, setVisible] = useState<boolean>(false)
    const isError = !!(error || errorText)
    

    useEffect(()=>{
        setSelectTitle(getTitleByValue(items, value ?? ""))
    },[value, items])

    const change = useCallback((data: string) => {
        setSelectTitle(getTitleByValue(items, data))
        onChange && onChange(data)
        setVisible(false)
    },[items, onChange])

    const selectMap = useCallback((item: IOption | string):IMenuItem => {
        if(typeof(item) === "string")
            return {title: item, onClick:()=>change(item)}
        return {title: item.title, onClick:()=>change(item.value), icon: item.icon, disabled: item.disabled}
    },[change])

    const show = useCallback((event: React.MouseEvent<HTMLDivElement>)=>{
        if(disabled) return
        event.preventDefault()
        let data = getContainerData(event.currentTarget)
        let x = data?.left ?? event.pageX
        let y = (data?.top)?data.top + data.height : event.pageY
        setPozition({x, y, width:data?.width ?? 150})
        setVisible(true)
    },[items, selectMap, disabled])

    const sizeClasses = {
        small: "text-field--small",
        medium: "text-field--medium",
        large: "text-field--large",
      };

    return(
        <div className={`input-field-container ${className}`}>
            <div ref={ref} style={style} className={`
                input-field 
                text-field 
                ${sizeClasses[size]}
                ${border ? "border" : ""} 
                ${visible ? "active" : ""} 
                ${transparent ? "transparent" : ""} 
                ${isError ? "error" : ""} 
                ${disabled ? "disabled" : ""}
                `}>
                <div className="input-container" onClick={show}>
                    <input
                    ref={inputRef}
                    required 
                    disabled={disabled}
                    type="text"
                    className={`${error?"error":""}`} 
                    name={name} 
                    value={selectTitle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    readOnly
                    />
                    <label>{(placeholder)?<span>{placeholder}</span>:null}</label>
                </div>
            </div>
            {isError && errorText && <Typography type='small' className="error-text">{errorText}</Typography>}
            {helperText && !isError && <Typography type='small' className="helper-text">{helperText}</Typography>}
            <Menu marginBottom={screensize === ScreenSize.MOBILE? 80:0} width={pozition.width} screensize={screensize} x={pozition.x} y={pozition.y} onHide={()=>setVisible(false)} container={container} blocks={[{items:items.map(selectMap)}]} visible={visible}/>
        </div>
    )
}
)
SelectField.displayName = "SelectField";