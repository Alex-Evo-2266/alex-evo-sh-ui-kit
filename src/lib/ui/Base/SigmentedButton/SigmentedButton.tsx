import React, { useEffect, useState } from "react"
import "./SigmentedButton.scss"
import { Check } from "../../Icons"

export interface SigmentedButtonProps{
    className?: string
    onClick?: (event:React.MouseEvent<HTMLInputElement>)=>void
    onContextMenu?: (event:React.MouseEvent<HTMLInputElement>)=>void
    onChange?: (value: string[], event?:React.MouseEvent<HTMLInputElement>)=>void
    items: string[]
    value?: string[] | string
    multiple?: boolean
    style?: React.CSSProperties
    name?: string
    readOnly?: boolean
    ref?: React.RefObject<HTMLInputElement>
  }

const getValue = (value?: string[] | string) => {
    if(value === undefined)
        return []
    if(Array.isArray(value))
        return value
    return [value]
}

export const SigmentedButton = ({readOnly, ref, style, multiple, value, items, className, name, onClick, onContextMenu, onChange}: SigmentedButtonProps) => {

    const [values, setValues] = useState<string[]>(getValue(value))

    const click = (e:React.MouseEvent<HTMLInputElement>) => {
        if(readOnly){
            return
        }
        onClick && onClick(e)
        const button: HTMLInputElement = e.currentTarget
        if(!multiple)
        {
            if(!button.dataset["el"])
                return
            setValues([button.dataset["el"]])
            onChange && onChange([button.dataset["el"]], e)
            return
        }
        const condidat = values.filter(item=>item === button.dataset["el"])
        let newValues = values.slice()
        if(condidat.length > 0 && button.dataset["el"])
            newValues = newValues.filter(item=>item !== button.dataset["el"])
        else if(button.dataset["el"])
            newValues.push(button.dataset["el"])
        setValues(newValues)
        onChange && onChange(newValues, e)
    }

    useEffect(()=>{
        if(value !== undefined)
            setValues(getValue(value))
    },[value])

    return(
    <div style={style} className={`sigmentedbutton-container ${className ?? ""}`}>
    {
        items.map((item, index)=>(
            <div className="sigmentedbutton-item-container" key={index}>
                <div data-el={item} onContextMenu={onContextMenu} onClick={click} key={index} className={`sigmentedbutton-item-button ${(values.includes(item))?"active":""}`}>
                    {(values.includes(item))?<div className="icon-container"><Check/></div>:null}
                    <div className="text-container">{item}</div>
                </div>
                <input ref={ref} multiple readOnly type='radio' style={{display: 'none'}} name={name} checked={values.includes(item)} value={item}/>
            </div>
        ))
    }
    </div>
    )
}
    

