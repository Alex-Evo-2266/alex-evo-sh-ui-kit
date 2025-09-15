import { celData, Column, ICell, IDataItem } from "../model/table"

function getColumnsName(rows: IDataItem[]): Column[] {
  if (!rows.length) return []

  const seen = new Set<string>()
  const cols: Column[] = []

  for (const row of rows) {
    for (const key in row) {
      if (!seen.has(key)) {
        seen.add(key)
        cols.push({ title: key, field: key })
      }
    }
  }
  return cols
}

function normalize(val: celData): ICell{
    return typeof val === "number" || typeof val === "string" ? { content: val } : val
}

function getCells(value: celData | celData[] | undefined){
    return !value
    ? []
    : Array.isArray(value)
    ? value.map(normalize)
    : [normalize(value)]
}

function getFirstCell(value: celData | celData[] | undefined){
    const cells = getCells(value)
    if(cells.length>0)
        return cells[0]
    return undefined
}

export { getColumnsName, getCells, normalize, getFirstCell }
