import "./Switch.scss"

export interface ISwitchProps{
    name?: string
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
    checked?: boolean,
    className?: string,
    style?: React.CSSProperties
    ref?: React.RefObject<HTMLInputElement>
    readOnly?: boolean
}

export const Switch = ({ref, style, name, onChange, checked, className, readOnly}:ISwitchProps) => {

    return(
        <div className={`swich-container ${className}`} style={style}>
            <input readOnly={readOnly} ref={ref} type="checkbox" name={name} onChange={onChange} checked={checked}/>
        </div>
    )
}