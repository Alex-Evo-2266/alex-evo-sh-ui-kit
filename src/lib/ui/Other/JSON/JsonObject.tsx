import { useCallback, useState } from "react"
import { JsonData, JsonDataObject } from "../../../model/jsonComponentModel"
import { JsonComponent } from "./JsonComponent"
import { CircleMinus, CirclePlus } from "../../Icons"


export interface JsonObjectContainerProps{
    name:string,
    data: JsonDataObject
    onChange:(data:JsonDataObject)=>void
    onDelete:()=>void
    readonly?: boolean
    initComponent?: boolean
    onlyStringValue?: boolean
}

export const JsonObjectContainer:React.FC<JsonObjectContainerProps> = ({readonly, name, data, onChange, onDelete, initComponent, onlyStringValue}) => {

    const [newKay, setNewKey] = useState<string>("")
    const [newValue, setNewValue] = useState<string>("")
    const [visibleAdd, setVisibleAdd] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(true)

    const change = useCallback((data1: JsonData, key:string) =>{
        onChange({...data, [key]:data1})
    },[onChange, data])

    const cancel = useCallback(() => {
        setNewValue("")
        setNewKey("")
        setVisibleAdd(false)
    },[])

    const addElement = useCallback(() => {
        let newVal = newValue
        try{
            if(!onlyStringValue)
                newVal = JSON.parse(newVal)
        }
        catch{}
        cancel()
        onChange({...data, [newKay]:newVal})
    },[data, onChange, newKay, newValue, cancel])

    const deleteElement = useCallback((key:string) => {
        let newVal = {...data}
        delete newVal[key]
        onChange(newVal)
    },[data, onChange])

    return(
        <div className={`json-card-container ${(!readonly)?"changeable":""}`}>
            <div>
                <div className='json-line json-object-header' >
                <span onClick={()=>setVisible(prev=>!prev)} className="json-element json-object-name json-object-header">{name}:{"{"}{(!visible)?<span>...</span>:null}</span>
                    {(!readonly)?<span className="json-element json-btn" onClick={()=>setVisibleAdd(true)}><CirclePlus/></span>:null}
                </div>
                {
                    (visible)?
                    <div className="json-object-content">
                    {   
                        (data)?
                        Object.keys(data).map((item, index)=>(
                            <div key={index} className='json-line'>
                                <JsonComponent readonly={readonly} onDelete={()=>deleteElement(item)} onChange={(data)=>change(data, item)} name={item} data={data[item]}/>
                            </div>
                        )
                        ):null
                    }
                    </div>:null
                }
                {
                    (visibleAdd && !readonly)?
                    <div className="json-object-content">
                        <span className="json-base-data border">
                            <input size={newKay.length || 10} placeholder="key" onChange={(e)=>setNewKey(e.target.value)} className="json-base-data-input" type="text" value={newKay}/>
                        </span>:
                        <span className="json-base-data border">
                            <input size={newValue.length || 10} placeholder="value" onChange={(e)=>setNewValue(e.target.value)} className="json-base-data-input" type="text" value={newValue}/>
                        </span>
                        <span className="json-base-data-btn-save json-base-data-btn" onClick={addElement}>
                            save
                        </span>
                        <span className="json-base-data-btn-cancel json-base-data-btn" onClick={cancel}>
                            cancel
                        </span>
                    </div>:
                    null
                }
                <div className='json-line'>
                {"}"}
                {
                    (!readonly && !initComponent)?
                        <span className="json-element json-btn" onClick={onDelete}><CircleMinus/></span>:null
                }
                </div>
            </div>
        </div>
    )
}