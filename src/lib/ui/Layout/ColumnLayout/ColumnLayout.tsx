import React from "react"
import './ColumnLayout.scss'

export interface IColumnElement{
	indexCol: number
	node: React.ReactNode
}

export interface ColumnLayoutProps{
    className?: string
    classNameColumn?: string
    style?: React.CSSProperties
    items: IColumnElement[]
    countColumn: number,
    gap?: number,
    onClickColl?: (index: number, e:React.MouseEvent<HTMLDivElement>)=>void
    onContextMenu?: (event:React.MouseEvent<HTMLDivElement>)=>void
    onClick?: (event:React.MouseEvent<HTMLDivElement>)=>void
}

export const ColumnLayout:React.FC<ColumnLayoutProps> = ({onClick, onContextMenu, gap, className, style, countColumn, items, onClickColl, classNameColumn}) => {

    const getColumns = (count: number, items: IColumnElement[]) => {
        let arr = new Array<React.ReactNode[]>(count).fill([]).map(_=>new Array<React.ReactNode>())
        for(const item of items)
        {
            if(item.indexCol >= arr.length)
            {
                console.error(`invalid index count. indexCol = ${item.indexCol}, column count = ${count}`)
                continue
            }
            arr[item.indexCol].push(item.node)
        }
        return arr
    }

    const click = (onClickColl)?onClickColl:()=>{}

    return (
        <div onClick={onClick} onContextMenu={onContextMenu} style={{...style, gap: gap?`${gap}px`:"5px", gridTemplateColumns:`repeat(${countColumn}, 1fr)`}} className={`alex-evo-sh-ui-kit-column-layout ${className}`}>
            {
                getColumns(countColumn, items).map((item, index)=>(
                    <div onClick={(e)=>click(index, e)} key={index} className={`alex-evo-sh-ui-kit-column-layout-coll ${classNameColumn}`}>
                        {
                            item.map((item2, index2)=>(
                                <div key={index2} className="alex-evo-sh-ui-kit-column-layout-item">
                                    {item2}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}