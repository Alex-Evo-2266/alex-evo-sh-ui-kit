import { formContext } from "./FormContext"
import { NumberField } from "./inputs/formNumberInput"
import { SelectField } from "./inputs/formSelectInput"
import { SwitchField } from "./inputs/formSwitch"
import { TextField } from "./inputs/formTextInput"

export interface FormProps<T extends {[x:string]: any}>{
    children: React.ReactNode
    changeValue: (name:string, data: any)=>void
    value: T
    name?: string
}

const BaseForm = <T extends {[x:string]: any},>({children, value, name, changeValue}:FormProps<T>) => {

    return(
        <formContext.Provider value={{value, changeField: changeValue}}>
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
    SwitchField: SwitchField
})