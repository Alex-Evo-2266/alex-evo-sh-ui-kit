import { IconButton, MoreVertical, Pen, Trash } from "../.."
import { Column, IDataItem, ITableAction } from "../../model/table"
import { TableCell } from "./TableCell"
import { useCallback } from "react"

interface RowProps {
  item: IDataItem
  columns: Column[]
  index: number
  actions?: ITableAction[]
  onDelete?: (data: IDataItem, index: number) => void
  onEdit?: (data: IDataItem, index: number) => void
  onContextMenu?: (
    event: React.MouseEvent<HTMLElement>,
    data: IDataItem,
    index: number
  ) => void
  onClickRow?: (data: IDataItem, index: number) => void
  maxH?: number[] | undefined
}

export const TableRow = ({
  actions,
  item,
  columns,
  onContextMenu,
  onDelete,
  onEdit,
  onClickRow,
  index,
  maxH,
}: RowProps) => {
  const click = useCallback(
    (event: React.MouseEvent<HTMLTableRowElement>) => {
      if (!(event.target as Element).closest(".no-click")) {
        onClickRow?.(item, index)
      }
    },
    [index, onClickRow, item]
  )

  return (
    <tr className="table-row" onClick={click}>
      {columns.map((col, idx) => (
        <TableCell
          H={maxH?.[idx]}
          color={col.color}
          backgroundColor={col.backgroundColor}
          column={col}
          data={item}
          key={col.field}
        />
      ))}
      {actions && (
        <td className="w-[180px] no-click">
          <div className="table-edit-button">
            {actions.map((act, i) => (
              <IconButton
                transparent
                key={i}
                icon={act.icon}
                onClick={(e) => act.onClick(e, item, index)}
              />
            ))}
          </div>
        </td>
      )}
      {(onContextMenu || onDelete || onEdit) && (
        <td className="w-[180px] table-edit-button no-click">
          <div className="table-edit-button">
            {onEdit && (
              <IconButton transparent icon={<Pen />} onClick={() => onEdit(item, index)} />
            )}
            {onDelete && (
              <IconButton
                transparent
                icon={<Trash className="text-red-500" />}
                onClick={() => onDelete(item, index)}
              />
            )}
            {onContextMenu && (
              <IconButton
                transparent
                icon={<MoreVertical />}
                onClick={(e) => onContextMenu(e, item, index)}
              />
            )}
          </div>
        </td>
      )}
    </tr>
  )
}
