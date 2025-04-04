import { useCallback, useState } from "react"
import { BasicTemplateDialog, TextButton } from "../../.."
import { ListContainer } from "../../List/List"
import { ListItem } from "../../List/ListItem"
import { RadioButton } from "../../Base/RadioButton/RadioButton"
import { Divider } from "../../Other/Divider/Divider"

interface IItem<T>{
    title: string
    data: T
}

interface BaseDialogButtonProps{
    onSuccess?: ()=>void
    onHide?: ()=>void
    disabled?: boolean
}

interface SelectionDialogProps<T>{
    onSuccess?: (data:T)=>void
    items: IItem<T>[]
    header: string
    onHide?: ()=>void
    name?: string
    noHide?: boolean
}

export function SelectionDialog<T>({onSuccess, items, header, onHide, noHide = false, name="dailog_name"}:SelectionDialogProps<T>) {

    const [value, setValue] = useState<T | undefined>(undefined)

    const success = useCallback(() => {
        console.log(value)
        onSuccess && value && onSuccess(value)
        setValue(undefined)
        !noHide && onHide && onHide()
    },[value])

    const change = useCallback((data: T) => {
        setValue(data)
    },[])


    return(
        <BasicTemplateDialog header={header} action={<BaseDialogButton onHide={onHide} onSuccess={success} disabled={value === undefined}/>}>
            <Divider style={{padding: "0px"}}/>
            <ListContainer className="transparent" scroll maxHeight="200px">
                {
                    items.map((item, index)=>(
                        <label key={index}>
                            <ListItem hovered header={item.title} onClick={()=>change(item.data)} control={<RadioButton onClick={()=>change(item.data)} name={name} checked={item.data === value}/>}/>  
                        </label>
                    ))
                }
            </ListContainer>
            <Divider style={{padding: "0px"}}/>
        </BasicTemplateDialog>
    )
}

function BaseDialogButton({onSuccess, onHide, disabled}:BaseDialogButtonProps){
    return(
        <div className="dialog-button-container">
            <TextButton onClick={onHide}>cancel</TextButton>
            <TextButton onClick={onSuccess} disabled={disabled}>OK</TextButton>
        </div>
    )
}