import './Panel.scss'

interface PanelProps{
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export const Panel:React.FC<PanelProps> = ({children, className, style}) => {

    return(
        <div style={style} className={`alex-evo-sh-ui-kit alex-evo-sh-ui-kit-panel ${className}`}>
            {children}
        </div>
    )
}