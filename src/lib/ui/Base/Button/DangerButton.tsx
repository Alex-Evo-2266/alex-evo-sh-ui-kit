import { useState } from "react"
import { BaseDialog } from "../../Dialog/BaseDialog/BaseDialog"
import { Button, IButtonProps } from "./Button"



export interface DangerButtonProps extends IButtonProps{
  header: string
  text: string
}

export const DangerButton:React.FC<DangerButtonProps> = ({text, header, onClick, styleType, ...props}) => {

    const [isOpenDialog, setOpenDialog] = useState(false)

  return(
    <>
    <Button styleType={styleType ?? "filled"} {...props} onClick={()=>setOpenDialog(true)}/>
    {
        isOpenDialog && <BaseDialog header={header} text={text} onHide={()=>setOpenDialog(false)}/>
    }
    </>
  )
}