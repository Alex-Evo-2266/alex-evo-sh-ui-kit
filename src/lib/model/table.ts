
export interface IColumn{
	field: string
	title: string
	color?: string
	backgroundColor?: string
	template?: (cell:ICell[], data: IDataItem)=>React.ReactNode
}

export type Column = IColumn

export interface ICell{
	content: string | number | React.ReactNode
	color?: string
	backgroundColor?: string
	onDelete?: ()=>void
	onClick?: ()=>void
}

export type celData = string | number | ICell

export interface IDataItem{
	[columnsName: string]:celData | celData[] | undefined
	__all__?: celData | celData[]
}

export interface ITableAction{
	icon: React.ReactNode
	onClick: (event: React.MouseEvent<HTMLElement>, data:IDataItem, index: number)=>void
}

export interface ITable{
	columns?: Column[]
	data: IDataItem[]
	actions?: ITableAction[]
	onDelete?: (data:IDataItem, index: number)=>void
	onEdit?: (data:IDataItem, index: number)=>void
	onContextMenu?: (event: React.MouseEvent<HTMLElement>, data:IDataItem, index: number)=>void
	onClickRow?: (data:IDataItem, index: number)=>void
}