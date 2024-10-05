import { Edit2, MoreVertical, Trash2 } from "lucide-react"
import { IconButton } from "../.."
import { Column, IDataItem, ITableAction } from "../../model/table"
import { TableCell } from "./TableCell"
import { useCallback } from "react"

interface RowProps{
	item: IDataItem
	columns: Column[]
	index: number
	actions?: ITableAction[]
	onDelete?: (data:IDataItem, index: number)=>void
    onEdit?: (data:IDataItem, index: number)=>void
    onContextMenu?: (event: React.MouseEvent<HTMLElement>, data:IDataItem, index: number)=>void
	onClickRow?: (data:IDataItem, index: number)=>void
	maxH?: number[] | undefined
}

export const TableRow = ({actions, item, columns, onContextMenu, onDelete, onEdit, onClickRow, index, maxH}:RowProps) => {

	const isRow = (e:React.MouseEvent<HTMLTableRowElement>):boolean=>{
		if((e.target as Element).closest(".no-click"))
			return false
		return true
	}

	const click = useCallback((event:React.MouseEvent<HTMLTableRowElement>)=>{
		if(isRow(event))
			onClickRow && onClickRow(item, index)
	},[index, onClickRow])
	
	return(
		<tr className="table-row" onClick={click}>
			{columns.map((col, index2)=>(
				<TableCell H={maxH?.[index2]} color={col.color} backgroundColor={col.backgroundColor} column={col} data={item} key={index2}/>
			))}
			{
				(actions)?
				<td className="w-[180px] no-click">
					<div className="table-edit-button">
						{actions.map((item2, index2)=>(
							<IconButton transparent key={index2} icon={item2.icon} onClick={(e)=>item2.onClick(e, item, index)}/>
						))}
					</div>
				</td>
				:null
			}
			{
				(onContextMenu || onDelete || onEdit)?
				<td className="w-[180px] table-edit-button no-click">
					<div className="table-edit-button">
						{onEdit?<IconButton transparent icon={<Edit2/>} onClick={()=>onEdit(item, index)}/>:null}
						{onDelete?<IconButton transparent icon={<Trash2 className="text-red-500"/>} onClick={()=>onDelete(item, index)}/>:null}
						{onContextMenu?<IconButton transparent icon={<MoreVertical/>} onClick={(e)=>onContextMenu(e, item, index)}/>:null}
					</div>
				</td>:
				null
			}
		</tr>
	)
}