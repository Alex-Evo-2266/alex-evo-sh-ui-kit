import { useState } from "react"
import { Button, DateField } from "../../lib"

export const TestDatePage = () => {

    const [v, setV] = useState(false)

    return(
        <>
        <div id="portal-root" style={{zIndex: 1000}}></div>
        <div>
            <Button onClick={()=>setV(true)}>c</Button>
            {
                (v)?
                <DateField border container={document.getElementById('portal-root')}/>:null
            }
        </div>
        </>
    )
}