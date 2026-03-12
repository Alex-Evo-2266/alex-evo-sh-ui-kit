import { useState } from "react"
import { BaseDialog } from "../../Dialog/BaseDialog/BaseDialog"
import { Button, IButtonProps } from "./Button"
import { ModalPortal } from "../../../portal/dialog"



export interface DangerButtonProps extends IButtonProps{
  header: string
  text: string
  container?: HTMLElement | null
}

export const DangerButton:React.FC<DangerButtonProps> = ({container, text, header, onClick, styleType, ...props}) => {

    const [isOpenDialog, setOpenDialog] = useState<React.MouseEvent<HTMLButtonElement, MouseEvent> | null>(null)

  return(
    <>
    <Button styleType={styleType ?? "filled"} {...props} onClick={setOpenDialog}/>
    {
        isOpenDialog !== null && 
        <ModalPortal container={container}>
            <BaseDialog header={header} text={text} onSuccess={()=>onClick?.(isOpenDialog)} onHide={()=>setOpenDialog(null)}/>
        </ModalPortal>
    }
    </>
  )
}