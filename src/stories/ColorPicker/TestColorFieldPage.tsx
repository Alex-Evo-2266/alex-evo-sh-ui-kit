import { useState } from "react"
import { Button, ColorField, FieldContainer } from "../../lib"

export const TestColorPage = () => {

    const [v, setV] = useState(false)

    return(
        <>
        <div id="portal-root" style={{zIndex: 1000}}></div>
        <div style={{zIndex: 5}}>
            <Button onClick={()=>setV(true)}>c</Button>
            {
                (v)?
                <FieldContainer header="test" style={{padding:"10px", backgroundColor: "#ccc"}}>
                    <ColorField container={document.getElementById('portal-root')}/>
                    <br/>
                    <ColorField transparent container={document.getElementById('portal-root')}/>
                    <br/>
                    <ColorField border container={document.getElementById('portal-root')}/>
                </FieldContainer>:null
            }
        </div>
        </>
    )
}