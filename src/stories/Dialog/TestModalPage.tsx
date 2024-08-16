import { useState } from "react"
import { BasicTemplateDialog, Button, DialogModal, FullScrinTemplateDialog } from "../../lib"

export const TestPage = () => {

    const [visible, setVisible] = useState<boolean>(false)
    const [visible2, setVisible2] = useState<boolean>(false)

    return(
        <>
        <div id="portal-root"></div>
        <div>
            <Button onClick={()=>setVisible(true)}>test</Button>
            {
                (visible)?
                <DialogModal container={document.getElementById("portal-root")}>
                    <BasicTemplateDialog onHide={()=>setVisible(false)}>
                        <p>asefg dfkugr aserdtjf wrdj  reshjse djzer jk jdtr</p>
                        <Button onClick={()=>setVisible2(true)}>test2</Button>
                        <Button styleType="text" onClick={()=>setVisible(false)}>close</Button>
                        {
                            (visible2)?
                            <DialogModal container={document.getElementById("portal-root")}>
                                <FullScrinTemplateDialog onHide={()=>setVisible2(false)}>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus aliquid, minus illo iste necessitatibus officiis minima temporibus? Dolorum tenetur nihil voluptatibus vel asperiores harum voluptate, incidunt doloremque minima facere.</p>
                                </FullScrinTemplateDialog>
                            </DialogModal>:null
                        }
                    </BasicTemplateDialog>
                </DialogModal>
                :(visible)?
                <p>not container</p>:null
            }
        </div>
        </>
    )
}