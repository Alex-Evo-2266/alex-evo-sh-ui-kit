import "./Switch.scss"

export interface ISwitchProps{
    name?: string
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
    checked?: boolean,
    className?: string,
    style?: React.CSSProperties
}

export const Switch = ({style, name, onChange, checked, className}:ISwitchProps) => {

    return(
        <div className={`swich-container ${className}`} style={style}>
            <input type="checkbox" name={name} onChange={onChange} checked={checked}/>
        </div>
    )
}