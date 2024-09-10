import { useCallback, useEffect, useState } from "react"
import { Menu } from "../../Menu/Menu"
import { IPoint } from "../../../model/point"
import { ScreenSize } from "../../../model/sizeScreen"
import { IMenuItem } from "../../../model/menu"
import { getContainerData } from "../../../helpers/getModalCord"

export interface IOption{
    title: string
    value: string
    // icon?: React.ReactNode
}

interface ISelectFieldProps{
    onChange?:(value: string)=>void
    value?: string
    placeholder?: string
    className?: string
    items: (IOption | string)[]
    border?: boolean
    name?: string
    error?: boolean
    onFocus?: (e:React.FocusEvent<HTMLInputElement>)=>void
    onBlur?: (e:React.FocusEvent<HTMLInputElement>)=>void
    container: HTMLElement | null
    screensize?: ScreenSize
}

const getTitleByValue = (items:(IOption | string)[], value: string) => {
    for(let item of items)
    {
        if(typeof(item) === "string" && item === value)
            return item
        if(typeof(item) !== "string" && item.value === value)
            return item.title
    }
    return ""
}        

interface IMenuSize extends IPoint{
    width: number
}

export const SelectField = ({screensize = ScreenSize.STANDART, items, onChange, value, placeholder, className, border, name, error, onBlur, onFocus, container}:ISelectFieldProps) => {

    const [selectTitle, setSelectTitle] = useState<string>("")
    const [pozition, setPozition] = useState<IMenuSize>({x:0, y:0, width: 100})
    const [visible, setVisible] = useState<boolean>(false)

    useEffect(()=>{
        setSelectTitle(getTitleByValue(items, value ?? ""))
    },[value, items])

    const change = useCallback((data: string) => {
        setSelectTitle(getTitleByValue(items, data))
        onChange && onChange(data)
        setVisible(false)
    },[items, onChange])

    const selectMap = useCallback((item: IOption | string):IMenuItem => {
        if(typeof(item) === "string")
            return {title: item, onClick:()=>change(item)}
        return {title: item.title, onClick:()=>change(item.value)}
    },[change])

    const show = useCallback((event: React.MouseEvent<HTMLDivElement>)=>{
        event.preventDefault()
        let data = getContainerData(event.currentTarget)
        let x = data?.left ?? event.pageX
        let y = (data?.top)?data.top + data.height : event.pageY
        setPozition({x, y, width:data?.width ?? 150})
        setVisible(true)
    },[items, selectMap])

    return(
        <>
            <div className={`input-field select-field ${className} ${border?"border":""}`}>
                <div className="input-container" onClick={show}>
                    <input
                    required 
                    type="text"
                    className={`${error?"error":""}`} 
                    name={name} 
                    value={selectTitle}
                    placeholder={placeholder}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    readOnly
                    />
                    <span className="text-field-line"></span>
                </div>
            </div>
            <Menu width={pozition.width} screensize={screensize} x={pozition.x} y={pozition.y} onHide={()=>setVisible(false)} container={container} blocks={[{items:items.map(selectMap)}]} visible={visible}/>
        </>
    )
}