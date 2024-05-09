
export interface IMenuSubItem{
    title: string
    icon?: React.ReactNode
    activated?: boolean
    onClick?: ()=>void
}

export interface IMenuItem{
    title: string
    icon?: React.ReactNode
    activated?: boolean
    onClick?: ()=>void
    subItems?: IMenuSubItem[]
}

export interface IBlock{
    items: IMenuItem[]
}

export interface IMenuOption{
    width?: number
    autoHide?: boolean
    onHide?: ()=>void
    onClick?: ()=>void
}

export interface MenuStateProps{
    blocks: IBlock[]
    visible: boolean
    x: number
    y: number
    width?: number
    autoHide?: boolean
    onHide?: ()=>void
    onClick?: ()=>void
}

export interface MenuButtomStateProps{
    blocks: IBlock[]
    visible: boolean
    width?: number
    autoHide?: boolean
    onHide?: ()=>void
    onClick?: ()=>void
}