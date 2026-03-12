import { Button } from "../../Base/Button/Button";
import { DangerButton } from "../../Base/Button/DangerButton";
import type { DialogButtonType } from "../types";

export interface DialogButtonProps{
    /** Колбек при сохранении */
    onSuccess?: (data?: any) => void;
    
    /** Колбек при закрытии */
    onHide?: () => void;
    btns: DialogButtonType[]
    
}

export const DialogButton = ({btns, onHide, onSuccess}:DialogButtonProps) => {


    return(
        <>
        {
            btns.map(btn=>btn.danger?(
                <DangerButton text={btn.danger.text} header={btn.danger.header} key={btn.text} style={{backgroundColor: "var(--Error-color)", ...btn.style}} onClick={
                btn.success? onSuccess :
                btn.hide? onHide:
                btn.onClick
                }
                disabled={btn.disabled}
                >{btn.text}</DangerButton>
            ):(
                <Button key={btn.text} style={btn.style} styleType={btn.styleType} onClick={
                btn.success? onSuccess :
                btn.hide? onHide :
                btn.onClick
                }
                disabled={btn.disabled}
                >{btn.text}</Button>
            ))
        }
        </>
    )
}