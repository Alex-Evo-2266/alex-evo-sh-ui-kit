import { useState} from "react"
import { Button, DialogModal, FullScrinTemplateDialog, SelectField, Switch, useColor } from "../../lib"
export type SelectDemoPageProps = {
    placeholder?: string
}

export const SelectInDialogDemoPage = ({placeholder}:SelectDemoPageProps) => {

    const {nightMode, setNightMode} = useColor()    


    const [visible, setVisible] = useState<boolean>(false)
    const [visibledialog, setVisibleDialog] = useState<boolean>(false)

    return(
        <div style={{zIndex: 5, background:"var(--Background-color)", color:"var(--On-background-color)"}}>
        <div id="portal-root-dialog" style={{zIndex: 1000}}></div>
        <div id="portal-root" style={{zIndex: 1200}}></div>
        <Switch checked={nightMode} onChange={(e)=>setNightMode(e.target.checked)}/>
        {
        (visible)?
        <>
        <div>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <Button onClick={()=>setVisibleDialog(true)}>open dialog</Button>

            {
                visibledialog &&
                <DialogModal container={document.getElementById("portal-root-dialog")}>
                    <FullScrinTemplateDialog onHide={()=>setVisibleDialog(false)}>
                        <div>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <p>dsfg</p>
                            <SelectField placeholder={placeholder} border items={["test1", "test2", "test3", "esfrgdf", "test3", "esfrgdf"]} container={document.getElementById('portal-root')}/>
                        </div>
                    </FullScrinTemplateDialog>
                </DialogModal>
            }
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <SelectField placeholder={placeholder} border items={["test1", "test2", "test3", "esfrgdf", "test3", "esfrgdf"]} container={document.getElementById('portal-root')}/>
            <p>test</p>
        </div>
        </>
        :<Button onClick={()=>setVisible(true)}>open page</Button>
        }
        </div>
    )
}
