import { useCallback } from "react"
import { JsonDataBaseTypes } from "../../model/jsonComponentModel"
import { CircleMinus } from "lucide-react"


export interface JsonBaseContainerProps{
    name:string,
    data?: JsonDataBaseTypes
    onChange:(data:JsonDataBaseTypes)=>void
    onDelete: ()=>void
}

export const JsonBaseContainer:React.FC<JsonBaseContainerProps> = ({name, data, onChange, onDelete}) => {

    const change = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    },[onChange])

    return(
        <div className='json-card-container'>
            <div>
                <div className='json-line'>
                    <span className={"json-object-name"}>
                        {name}
                    </span>: <span className="json-base-data">
                        <input onChange={change} className="json-base-data-input" type="text" value={(data !== undefined)?String(data):""}/>
                    </span><span className="json-element json-btn" onClick={onDelete}><CircleMinus size={18}/></span>
                </div>
            </div>
        </div>
    )
}