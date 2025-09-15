import { getCells } from "../../helpers/table"
import { Column, IDataItem, ICell, celData } from "../../model/table"

interface CellProps {
  column: Column
  data: IDataItem
  color?: string
  backgroundColor?: string
  H?: number
}

export const TableCell = ({ data, column, color, backgroundColor, H }: CellProps) => {
  const value = data[column.field] as celData | celData[] | undefined

  const cells: ICell[] = getCells(value)

  return (
    <td style={{ backgroundColor: (cells.length > 0 && cells[0].backgroundColor)?cells[0].backgroundColor:backgroundColor, height: H }}>
      {column.template
        ? column.template(cells, data)
        : cells.map((item, idx) => (
            <p
              key={idx}
              style={{ color: item.color ?? color }}
              className={item.onClick ? "no-click" : ""}
              onClick={item.onClick}
            >
              {item.content}
            </p>
          ))}
    </td>
  )
}
