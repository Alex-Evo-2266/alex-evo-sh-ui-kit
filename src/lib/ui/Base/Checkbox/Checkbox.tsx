import "./Checkbox.scss"

export interface CheckboxProps{
    name?: string
    checked?: boolean
    readOnly?: boolean
    checkIcon?: React.ReactNode
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>)=>void
}

export const Checkbox = ({name, checked, onChange, readOnly, checkIcon}:CheckboxProps) => {
    return(
        <label className="checkbox-container">
            <input className="checkbox" name={name} type="checkbox" checked={checked} onChange={onChange} readOnly={readOnly}/>
            <span>{(checkIcon)?checkIcon:<span className="checkbox-ckeck-icon">&#10003;</span>}</span>
        </label>
    )
}