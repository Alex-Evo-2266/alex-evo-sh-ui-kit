import "./RadioButton.scss"

export interface RadioButtonProps{
    name: string
    currentValue?: string | number
    value?: string | number
    onChange?: (e:React.ChangeEvent<HTMLInputElement>)=>void
    readOnly?: boolean
    checked?: boolean
    defaultChecked?: boolean
}

export interface BaseRadioButtonProps{
    name: string
    checked?: boolean
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>)=>void
}

export const BaseRadioButton = ({name, checked, onClick}:BaseRadioButtonProps) => {

    return(
        <label className="radio-button-container">
            <input className="radio-button" onClick={onClick} name={name} type="radio" checked={checked} readOnly/>
            <span></span>
        </label>
    )
}

export const RadioButton = ({defaultChecked, name, currentValue, value, onChange, readOnly, checked}:RadioButtonProps) => {

    return(
        <label className="radio-button-container">
            <input defaultChecked={defaultChecked} className="radio-button" name={name} type="radio" checked={(currentValue && value && currentValue === value) || checked} value={value} onChange={onChange} readOnly={readOnly}/>
            <span></span>
        </label>
    )
}