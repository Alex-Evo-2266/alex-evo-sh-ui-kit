import { useState } from "react"
import { BasicTemplateDialog, Button, DialogModal, FullScrinTemplateDialog } from "../../lib"

export const TestPage2 = () => {

    const [visible, setVisible] = useState<boolean>(false)
    const [visible2, setVisible2] = useState<boolean>(false)

    return(
        <>
        <div id="portal-root"></div>
        <div>
            <Button onClick={()=>setVisible(true)}>test</Button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum explicabo facilis facere illum, iste corporis delectus culpa? Nisi quisquam voluptate impedit distinctio eveniet neque sequi laudantium doloremque voluptatum perferendis.</p>
            {
                (visible)?
                <DialogModal container={document.getElementById("portal-root")}>
                    <BasicTemplateDialog onHide={()=>setVisible(false)}>
                        <p>asefg dfkugr aserdtjf wrdj  reshjse djzer jk jdtr</p>
                        <div>
                            <Button onClick={()=>setVisible2(true)}>test2</Button>
                            <Button styleType="text" onClick={()=>setVisible(false)}>close</Button>
                        </div>
                        {
                            (visible2)?
                            <DialogModal container={document.getElementById("portal-root")}>
                                <FullScrinTemplateDialog onHide={()=>setVisible2(false)}>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus aliquid, minus illo iste necessitatibus officiis minima temporibus? Dolorum tenetur nihil voluptatibus vel asperiores harum voluptate, incidunt doloremque minima facere.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus aliquid, minus illo iste necessitatibus officiis minima temporibus? Dolorum tenetur nihil voluptatibus vel asperiores harum voluptate, incidunt doloremque minima facere.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus aliquid, minus illo iste necessitatibus officiis minima temporibus? Dolorum tenetur nihil voluptatibus vel asperiores harum voluptate, incidunt doloremque minima facere.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus aliquid, minus illo iste necessitatibus officiis minima temporibus? Dolorum tenetur nihil voluptatibus vel asperiores harum voluptate, incidunt doloremque minima facere.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus aliquid, minus illo iste necessitatibus officiis minima temporibus? Dolorum tenetur nihil voluptatibus vel asperiores harum voluptate, incidunt doloremque minima facere.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus aliquid, minus illo iste necessitatibus officiis minima temporibus? Dolorum tenetur nihil voluptatibus vel asperiores harum voluptate, incidunt doloremque minima facere.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus aliquid, minus illo iste necessitatibus officiis minima temporibus? Dolorum tenetur nihil voluptatibus vel asperiores harum voluptate, incidunt doloremque minima facere.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus aliquid, minus illo iste necessitatibus officiis minima temporibus? Dolorum tenetur nihil voluptatibus vel asperiores harum voluptate, incidunt doloremque minima facere.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus aliquid, minus illo iste necessitatibus officiis minima temporibus? Dolorum tenetur nihil voluptatibus vel asperiores harum voluptate, incidunt doloremque minima facere.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus aliquid, minus illo iste necessitatibus officiis minima temporibus? Dolorum tenetur nihil voluptatibus vel asperiores harum voluptate, incidunt doloremque minima facere.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus aliquid, minus illo iste necessitatibus officiis minima temporibus? Dolorum tenetur nihil voluptatibus vel asperiores harum voluptate, incidunt doloremque minima facere.</p>
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