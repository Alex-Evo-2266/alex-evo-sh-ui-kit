import { BaseActionCard, Button, Chips, TextField } from '../..'
import { joinValue, splitValue } from '../../helpers/stringSplitAndJoin'
import './MoreText.scss'
import { useCallback, useEffect, useState } from 'react'

export interface MoreTextProps{
    value: string
    onChange?: (value: string) => void
    border?: boolean
    minWidth?: string
}

export const MoreText = ({minWidth, value, onChange, border}:MoreTextProps) => {

    const [values, setValues] = useState<string[]>([])
    const [newValue, setNewValue] = useState<string>('')

    useEffect(()=>{
        console.log("p0")
        setValues(splitValue(value))
    },[value])

    useEffect(()=>{
       console.log(values)
    },[values])

    const change = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.target.value)
    }

    const addValue = useCallback(() => {
        if(newValue === '' || values.includes(newValue))
            return
        const data = [...values, newValue.trim()]
        setValues(data)
        onChange && onChange(joinValue(data))
        setNewValue("")
    },[values, newValue])

    const deleteValue = (id: number) => {
        const data = values.filter((_, index)=>index !== id)
        setValues(data)
        onChange && onChange(joinValue(data))
    }

    return(
        <div className='more-text' style={{minWidth:minWidth}}>
            <div className='add value'>
                <TextField onChange={change} value={newValue} border={border}/>
                <BaseActionCard><Button onClick={addValue}>add</Button></BaseActionCard>
            </div>
            <div className='chips-container'>
            {
                values.map((item, index)=>(
                    <Chips key={index} text={item} onDelete={()=>deleteValue(index)}/>
                ))
            }
            </div>
        </div>
    )
}