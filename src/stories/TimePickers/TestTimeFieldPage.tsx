import { useState } from "react"
import { Button } from "../../lib"
import { TimeField } from "../../lib/ui/TimePickers/TimeField"

export const TestTimePage = () => {

    const [v, setV] = useState(false)

    return(
        <>
        <div id="portal-root" style={{zIndex: 1000}}></div>
        <div>
            <Button onClick={()=>setV(true)}>c</Button>
            {
                (v)?
                <TimeField border container={document.getElementById('portal-root')}/>:null
            }
        </div>
        </>
    )
}