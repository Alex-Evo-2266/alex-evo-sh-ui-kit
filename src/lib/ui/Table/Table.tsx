import { useMemo } from "react"
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

    return(
        <div className={`table-container mt-3 ${onClickRow?"clicked":""} ${adaptive? "auto-rotate":""}`}>
            <table>
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