import { useCallback, useMemo, useRef } from "react"
import { Column, ITable } from "../../model/table"
import "./Table.scss"
import { getColumnsName } from "../../helpers/table"
import { TableRow } from "./TableRow"
import { ScreenSize } from "../../model/sizeScreen"

interface ITableProps extends ITable{
    adaptive?: boolean
    screenSize?: ScreenSize
}

export const Table = ({data, columns, onDelete, onContextMenu, onEdit, actions, onClickRow, adaptive}:ITableProps) => {

    const cols = useMemo<Column[]>(()=>columns ?? getColumnsName(data),[data, columns])
    const tableref = useRef<HTMLTableElement>(null)

    const getMaxHeight = useCallback(() => {
        if(!tableref.current) return;
        const table = tableref.current
        const body = table.tBodies.item(0)
        const th = table.tHead?.children.item(0)?.children
        const countCol = th?.length ?? 1
        const maxH: number[] =  new Array(countCol).fill(0)
        if(!body) return;
        for(const row of body.children){
            for(let index = 0; index < row.children.length; index++){
                const cell = row.children[index]
                const height = cell.getBoundingClientRect().height
                if(maxH[index] < height)
                    maxH[index] = height
            }
        }
        return maxH
    },[tableref])

    // useEffect(()=>{
    //     console.log(maxH)
    // },[maxH, tableref])

    return(
        <div className={`table-container mt-3 ${onClickRow?"clicked":""} ${adaptive? "auto-rotate":""}`}>
            <table ref={tableref}>
                <thead>
                    <tr>
                        {
                            cols.map((item, index)=>(
                                <th className="min-width" key={index}>{item.title}</th>
                            ))
                        }
                        {
                            (actions)?<th className="table-actions-header">actions</th>:null
                        }
                        {
                            (onDelete || onContextMenu || onEdit)?<th className="table-actions-header"></th>:null
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index)=>(
                            <TableRow onClickRow={onClickRow} actions={actions} index={index} columns={cols} item={item} key={index} onDelete={onDelete} onContextMenu={onContextMenu} onEdit={onEdit}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}