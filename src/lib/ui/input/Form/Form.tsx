import { formContext } from "./FormContext"
import { MoreTextField } from "./inputs/formMoreText"
import { NumberField } from "./inputs/formNumberInput"
import { SelectField } from "./inputs/formSelectInput"
import { SwitchField } from "./inputs/formSwitch"
import { SwitchButtonField } from "./inputs/formSwitchButton"
import { TextField } from "./inputs/formTextInput"
import './inputs/styleInput.scss'

export interface FormProps<T extends {[x:string]: any}>{
    children: React.ReactNode
    changeValue: (name:string, data: any)=>void
    value: T
    name?: string
    errors?: {[key:string]:string}
}

const BaseForm = <T extends {[x:string]: any},>({children, value, name, changeValue, errors}:FormProps<T>) => {

    return(
        <formContext.Provider value={{value, changeField: changeValue, errors}}>
            <form name={name}>
            {children}
            </form>
        </formContext.Provider>
    )

}


export const Form = Object.assign(BaseForm, {
    TextInput: TextField,
    NumberInput: NumberField,
    SelectInput: SelectField,
    SwitchField: SwitchField,
    SwitchButtonField: SwitchButtonField,
    MoreTextField: MoreTextField
})