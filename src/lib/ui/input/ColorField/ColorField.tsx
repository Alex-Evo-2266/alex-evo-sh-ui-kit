import { useCallback, useState } from "react"
import "./ColorField.scss"
import { ModalPortal } from "../../../portal/dialog"
import { ColorPicker } from "./ColorPicker"
import { getTextColor } from "../../../helpers/color/colorGenerator"
import { Palette } from "../../Icons/Palette/Palette"

interface IColorFieldProps{
    placeholder?: string
    onChange?:(value: string)=>void
    value?: string
    className?: string
    border?: boolean
    container: HTMLElement | null
    transparent?: boolean
    userColor?: string[]
    onAddColor?: (colors: string[])=>void
    def?: string
}

export const ColorField = ({border, onChange, container, value, className, transparent, userColor, onAddColor, def, placeholder}:IColorFieldProps) => {

    const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false)
    const [color, setColor] = useState<string>(value ?? "#f00")

    const click = () => {
        setDatePickerVisible(true)
    }

    const change = useCallback((color:string) => {
        console.log(color)
        setColor(color)
        onChange && onChange(color)
        setDatePickerVisible(false)
    },[onChange])

    return(
        <>
        <div className={`input-field color-field ${border?"border":""} ${transparent?"transparent":""} ${className ?? ""}`}>
            {
                placeholder && 
                <div className="color-field-label" onClick={click}>
                    <span className="data color-field-placeholder">{placeholder}</span>
                </div>
            }
            <div className=" color-indicator-field" style={{backgroundColor:color}} onClick={click}>
                <p className="data color-field-data" style={{color: getTextColor(color)}}>{color}</p>
            </div>
            <div className="color-icon-container icon-container" style={{marginRight: "12px", marginLeft: "0"}} onClick={click}><Palette/></div>
		</div>
        {
            (datePickerVisible)?
            <ModalPortal container={container}>
                <ColorPicker defaultColor={def} userColors={userColor} onAddColor={onAddColor} onChange={change} beginColor={color} onHide={()=>setDatePickerVisible(false)}/>
            </ModalPortal>
            :null
        }
        </>
        
    )
}