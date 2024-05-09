import "./List.scss"

export interface ListContainerProps{
    children?: React.ReactNode
    className?: string
    maxHeight?: string
    scroll?: boolean
    transparent?: boolean
}

export const ListContainer = ({children, className, maxHeight, scroll, transparent}:ListContainerProps) => {
    return(
        <ul style={{overflowY:(maxHeight)?(scroll)?"scroll":"hidden":undefined, maxHeight:maxHeight, backgroundColor:(transparent)?"transparent":undefined}} className={`list-container ${className} ${scroll?"scroll":""}`}>
            {children}
        </ul>
    )
}