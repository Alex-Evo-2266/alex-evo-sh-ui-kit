import { Palette } from "lucide-react"
import { useCallback, useState } from "react"
import "./ColorField.scss"
import { DialogModal } from "../../portal/dialog"
import { ColorPicker } from "./ColorPicker"

interface IColorFieldProps{
    onChange?:(value: string)=>void
    value?: string
    className?: string
    border?: boolean
    container: HTMLElement | null
    transparent?: boolean
    userColor?: string[]
    onAddColor?: (colors: string[])=>void
}

export const ColorField = ({border, onChange, container, value, className, transparent, userColor, onAddColor}:IColorFieldProps) => {

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
        <div className={`date-field color-field ${border?"border":""} ${transparent?"transparent":""} ${className ?? ""}`}>
            <div className="color-field-label" onClick={click}>
                <span className="data color-field-data">{color}</span>
            </div>
            <div className=" color-indicator-field" style={{backgroundColor:color}} onClick={click}></div>
            <div className="color-icon-container icon-container" style={{marginRight: "12px", marginLeft: "0"}} onClick={click}><Palette/></div>
		</div>
        {
            (datePickerVisible)?
            <DialogModal container={container}>
                <ColorPicker userColor={userColor} onAddColor={onAddColor} onChange={change} beginColor={color} onHide={()=>setDatePickerVisible(false)}/>
            </DialogModal>
            :null
        }
        </>
        
    )
}