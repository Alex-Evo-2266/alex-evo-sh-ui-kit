import { useCallback, useState } from "react"
import { JsonData, JsonDataArray } from "../../model/jsonComponentModel"
import { JsonComponent } from "./JsonComponent"
import { CircleMinus, PlusCircle } from "lucide-react"


export interface JsonArrayContainerProps{
    name:string,
    data: JsonDataArray
    onChange: (data:JsonDataArray)=>void
    onDelete: ()=>void
}

export const JsonArrayContainer:React.FC<JsonArrayContainerProps> = ({name, data, onChange, onDelete}) => {

    const [newValue, setNewValue] = useState<string>("")
    const [visible, setVisible] = useState<boolean>(false)

    const change = useCallback((data1:JsonData, index:number)=>{
        const newData = data.slice()
        newData[index] = data1
        onChange(newData)
    },[onChange, data])

    const cancel = useCallback(() => {
        setNewValue("")
        setVisible(false)
    },[])

    const addElement = useCallback(() => {
        let newVal = newValue
        try{
            newVal = JSON.parse(newVal)
        }
        catch{}
        cancel()
        onChange([...data, newVal])
    },[data, onChange, newValue, cancel])

    const deleteElement = useCallback((index:number) => {
        let newVal = [...data]
        delete newVal[index]
        onChange(newVal)
    },[data, onChange])

    return(
        <div className='json-card-container'>
            <div>
                <div className='json-line'>
                    <span className="json-object-name">{name}:{"["}</span><span className="json-element json-btn" onClick={()=>setVisible(true)}><PlusCircle size={18}/></span>
                </div>
                <div className="json-object-content">
                {   
                    data && data.map((item, index)=>(
                        <div key={index} className='json-line'>
                            <JsonComponent onDelete={()=>deleteElement(index)} onChange={(data)=>change(data, index)} name={String(index)} data={item}/>
                        </div>
                    ))
                }
                </div>
                {
                    (visible)?
                    <div className="json-object-content">
                        <span className="json-base-data border">
                            <input placeholder="value" onChange={(e)=>setNewValue(e.target.value)} className="json-base-data-input" type="text" value={newValue}/>
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
                    {"]"}<span className="json-element json-btn" onClick={onDelete}><CircleMinus size={18}/></span>
                </div>
            </div>
        </div>
    )
}