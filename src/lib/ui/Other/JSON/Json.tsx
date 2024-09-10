import { useCallback, useState } from 'react'
import { JsonData } from '../../../model/jsonComponentModel'
import './Json.scss'
import { JsonComponent } from './JsonComponent'

export interface JsonContainerProps{
    name: string
    data?: JsonData
    onChange?:(data:JsonData)=>void
    onDelete?: ()=>void
    readonly?: boolean
}


export const JsonContainer:React.FC<JsonContainerProps> = ({readonly, name, data, onChange, onDelete}) => {


    const [value, setValue] = useState<JsonData | undefined>(data || undefined)
    const [newValue, setNewValue] = useState<string>("")

    const change = useCallback((data1: JsonData)=>{
        if(readonly)
            return
        setValue(data1)
        onChange && onChange(data1)
    },[onChange])

    const del = useCallback(()=>{
        if(readonly)
            return
        setValue(undefined)
        onDelete && onDelete()
    },[onDelete])

    const addElement = useCallback(() => {
        if(readonly)
            return
        let newVal = newValue
        try{
            newVal = JSON.parse(newVal)
        }
        catch{}
        setValue(newVal)
        onChange && onChange(newVal)
    },[onChange, newValue])

    if(!value)
        return(
                <div className={`json-object-content ${(!readonly)?"changeable":""}`}>
                    <span className="json-base-data border">
                        <input size={newValue.length || 10} placeholder="value" onChange={(e)=>setNewValue(e.target.value)} className="alex-evo-sh-ui-kit-json json-base-data-input" type="text" value={newValue}/>
                    </span>
                    <span className="json-base-data-btn-save json-base-data-btn" onClick={addElement}>
                        save
                    </span>
                </div>
        )

    return(
        <JsonComponent readonly={readonly} onDelete={del} onChange={change} data={value} name={name}/>
    )
}