import { useCallback, useState } from "react"
import { BasicTemplateDialog } from "../TemplateDialog/BasicTemplateDialog"
import { TextField } from "../../TextField/TextField"
import { TextButton } from "../../Button/Button"

export interface TextDialogProps{
    text?: string
    header?: string
    onSuccess?: (data: string)=>void
    onHide?: ()=>void
    placeholder?: string
    type?: string
    min?: number
    max?: number
    styleContainer?: React.CSSProperties
}

interface TextDialogButtonProps{
    onSuccess?: ()=>void
    onHide?: ()=>void
}

export const TextDialog = ({styleContainer, text, header, onSuccess, onHide, placeholder, type="text", min=0, max=100}:TextDialogProps) => {

    const [value, setValue] = useState<string>("")

    const Success = useCallback(() => {
        onSuccess && onSuccess(value)
        onHide && onHide()
    },[value])

    const changeText = (data: string)=>{
        if(type === "number")
        {
            if(Number(data) < min)
                data = String(min)
            if(Number(data) > max)
                data = String(max)
        }
        setValue(data)
    }

    return(
        <BasicTemplateDialog style={styleContainer} header={header} action={<TextDialogButton onHide={onHide} onSuccess={Success}/>}>
            <p>{text}</p>
            <div className="dialog-input-container">
                <TextField max={max} min={min} type={type} border placeholder={placeholder} value={value} onChange={(e)=>changeText(e.target.value)}/>
            </div>
        </BasicTemplateDialog>
    )
}

function TextDialogButton({onSuccess, onHide}:TextDialogButtonProps){
    return(
        <div className="dialog-button-container">
            <TextButton onClick={onHide}>cancel</TextButton>
            <TextButton onClick={onSuccess}>OK</TextButton>
        </div>
    )
}