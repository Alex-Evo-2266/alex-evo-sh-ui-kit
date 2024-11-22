import { useState} from "react"
import { Button, Switch, useColor } from "../../../lib"
import { SelectField } from "../../../lib/ui/input/SelectField/Select"
export type SelectDemoPageProps = {
    placeholder?: string
}

export const SelectDemoPage = ({placeholder}:SelectDemoPageProps) => {

    const {nightMode, setNightMode} = useColor()    


    const [visible, setVisible] = useState<boolean>(false)

    return(
        <div style={{zIndex: 5, background:"var(--Background-color)", color:"var(--On-background-color)"}}>
        <div id="portal-root" style={{zIndex: 1000}}></div>
        <Switch checked={nightMode} onChange={(e)=>setNightMode(e.target.checked)}/>
        {
        (visible)?
        <>
        <div>
            <SelectField placeholder={placeholder} border items={["test1", "test2", "test3"]} container={document.getElementById('portal-root')}/>
        </div>
        </>
        :<Button onClick={()=>setVisible(true)}>open page</Button>
        }
        </div>
    )
}
