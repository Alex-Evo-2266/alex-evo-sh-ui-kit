import { useState } from "react"
import { Button, NumberField } from "../../../lib"

export const TestNumberPage = () => {

    const [value, setValue] = useState<number>(0)

    const change = (val:number) => {
        setValue(val)
    }

    return(
        <>
        <div id="portal-root"></div>
        <div>
            <NumberField onChange={change} value={value}/>
            <Button onClick={()=>setValue(prev=>prev+1)}>+</Button>
            <Button onClick={()=>setValue(prev=>prev-1)}>-</Button>
            <p>{value}</p>
        </div>
        </>
    )
}