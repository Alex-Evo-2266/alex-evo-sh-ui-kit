import './FieldContainer.scss'

export interface FieldContainerProps{
    children: React.ReactNode
    header: string
    className?: string
    style?: React.CSSProperties
}

export const FieldContainer = ({children, header, className, style}:FieldContainerProps) => (
    <div style={style} className={`field-container-ui ${className ?? ""}`}>
        <h4>{header}</h4>
        <div className='field-container-content'>
            {children}
        </div>
    </div>
)