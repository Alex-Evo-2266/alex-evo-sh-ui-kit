import { useMemo } from "react"
import { Column, ITable, celData } from "../../model/table"
import "./Table.scss"
import { getColumnsName, getFirstCell } from "../../helpers/table"
import { TableRow } from "./TableRow"
import { ScreenSize } from "../../model/sizeScreen"

interface ITableProps extends ITable {
  adaptive?: boolean
  screenSize?: ScreenSize
}

export const Table = ({
  data,
  columns,
  onDelete,
  onContextMenu,
  onEdit,
  actions,
  onClickRow,
}: ITableProps) => {
  const cols = useMemo<Column[]>(
    () => columns ?? getColumnsName(data),
    [data, columns]
  )

  const totalCols =
    cols.length +
    (actions ? 1 : 0) +
    (onDelete || onContextMenu || onEdit ? 1 : 0)

  // рендер содержимого __all__
  const renderAllCell = (content: celData | celData[] | undefined) => {
    if (!content) return null

    const cells = Array.isArray(content) ? content : [content]

    return cells.map((c, idx) => {
      if (typeof c === "string" || typeof c === "number") {
        return <span key={idx}>{c}</span>
      }
      // ICell
      return (
        <span
          key={idx}
          style={{ color: c.color }}
          onClick={c.onClick}
        >
          {c.content}
        </span>
      )
    })
  }

  return (
    <div className={`table-container mt-3 ${onClickRow ? "clicked" : ""}`}>
      <table>
        <thead>
          <tr>
            {cols.map((item) => (
              <th className="min-width" key={item.field}>
                {item.title}
              </th>
            ))}
            {actions && <th className="table-actions-header">actions</th>}
            {(onDelete || onContextMenu || onEdit) && (
              <th className="table-actions-header"></th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            if ("__all__" in item) {
                const cell = getFirstCell(item.__all__)
                return (
                    <tr className="table-all-row" key={`all-${index}`}>
                        <td colSpan={totalCols} style={{backgroundColor: cell?.backgroundColor, color: cell?.color}}>
                            {renderAllCell(cell)}
                        </td>
                    </tr>
                )
            }

            return (
              <TableRow
                onClickRow={onClickRow}
                actions={actions}
                index={index}
                columns={cols}
                item={item}
                key={index}
                onDelete={onDelete}
                onContextMenu={onContextMenu}
                onEdit={onEdit}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
