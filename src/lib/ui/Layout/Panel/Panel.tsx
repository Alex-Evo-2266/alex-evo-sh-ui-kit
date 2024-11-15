import './Panel.scss'

interface PanelProps{
    children: React.ReactNode
}

export const Panel:React.FC<PanelProps> = ({children}) => {

    return(
        <div className='alex-evo-sh-ui-kit alex-evo-sh-ui-kit-panel'>
            {children}
        </div>
    )
}