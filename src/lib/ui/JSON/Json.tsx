import { useCallback, useState } from 'react'
import { JsonData } from '../../model/jsonComponentModel'
import './Json.scss'
import { JsonComponent } from './JsonComponent'

export interface JsonContainerProps{
    name: string
    data?: JsonData
    onChange:(data:JsonData)=>void
    onDelete?: ()=>void
}


export const JsonContainer:React.FC<JsonContainerProps> = ({name, data, onChange, onDelete}) => {


    const [value, setValue] = useState<JsonData | undefined>(data || undefined)
    const [newValue, setNewValue] = useState<string>("")

    const change = useCallback((data1: JsonData)=>{
        setValue(data1)
        onChange(data1)
    },[onChange])

    const del = useCallback(()=>{
        setValue(undefined)
        onDelete && onDelete()
    },[onDelete])

    const addElement = useCallback(() => {
        let newVal = newValue
        try{
            newVal = JSON.parse(newVal)
        }
        catch{}
        setValue(newVal)
        onChange(newVal)
    },[onChange, newValue])

    if(!value)
        return(
                <div className="json-object-content">
                    <span className="json-base-data border">
                        <input placeholder="value" onChange={(e)=>setNewValue(e.target.value)} className="json-base-data-input" type="text" value={newValue}/>
                    </span>
                    <span className="json-base-data-btn-save json-base-data-btn" onClick={addElement}>
                        save
                    </span>
                </div>
        )

    return(
        <JsonComponent onDelete={del} onChange={change} data={value} name={name}/>
    )
}