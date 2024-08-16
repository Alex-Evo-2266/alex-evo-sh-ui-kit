import { JsonData } from '../../model/jsonComponentModel'
import { JsonObjectContainer } from './JsonObject'
import './Json.scss'
import { JsonArrayContainer } from './JsonArray'
import { JsonBaseContainer } from './JsonBaseTypes'

export interface JsonComponentProps{
    name: string
    data: JsonData
    onChange:(data:JsonData)=>void
    onDelete:()=>void
    readonly?: boolean
}

export const JsonComponent:React.FC<JsonComponentProps> = ({readonly, name, data, onChange, onDelete}) => {

    if(typeof data === "boolean" || typeof data === "number" || typeof data === "string")
        return(<JsonBaseContainer readonly={readonly} onDelete={onDelete} onChange={onChange} data={data} name={name}/>)
    if(!data)
        return null
    if(Array.isArray(data))
        return(<JsonArrayContainer readonly={readonly} onDelete={onDelete} onChange={onChange} data={data} name={name}/>)
    return(<JsonObjectContainer readonly={readonly} onDelete={onDelete} onChange={onChange} data={data} name={name}/>)
}