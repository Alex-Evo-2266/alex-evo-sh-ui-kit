import './ContentBox.scss'

export interface ContentBoxProps{
    children: React.ReactNode
    header: string
    className?: string
    style?: React.CSSProperties
}

export const ContentBox = ({children, header, className, style}:ContentBoxProps) => (
    <div style={style} className={`field-container-ui ${className ?? ""}`}>
        <h4>{header}</h4>
        <div className='field-container-content'>
            {children}
        </div>
    </div>
)