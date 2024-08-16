import { useCallback } from "react"
import { JsonDataBaseTypes } from "../../model/jsonComponentModel"
import { CircleMinus } from "lucide-react"


export interface JsonBaseContainerProps{
    name:string,
    data?: JsonDataBaseTypes
    onChange:(data:JsonDataBaseTypes)=>void
    onDelete: ()=>void
    readonly?: boolean
}

export const JsonBaseContainer:React.FC<JsonBaseContainerProps> = ({readonly, name, data, onChange, onDelete}) => {

    const change = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    },[onChange])

    return(
        <div className='json-card-container'>
            <div>
                <div className='json-line'>
                    <span className={"json-object-name"}>
                        {name}
                    </span>: 
                    {
                        (readonly)?
                        <span className="json-base-data">
                            {data}
                        </span>:
                        <>
                        <span className="json-base-data">
                            <input size={data?.toString().length || 10} onChange={change} className="json-base-data-input" type="text" value={(data !== undefined)?String(data):""}/>
                        </span>
                        <span className="json-element json-btn" onClick={onDelete}><CircleMinus size={18}/></span>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}