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
}

export const JsonComponent:React.FC<JsonComponentProps> = ({name, data, onChange, onDelete}) => {

    if(typeof data === "boolean" || typeof data === "number" || typeof data === "string")
        return(<JsonBaseContainer onDelete={onDelete} onChange={onChange} data={data} name={name}/>)
    if(!data)
        return null
    if(Array.isArray(data))
        return(<JsonArrayContainer onDelete={onDelete} onChange={onChange} data={data} name={name}/>)
    return(<JsonObjectContainer onDelete={onDelete} onChange={onChange} data={data} name={name}/>)
}