import { formContext } from "./FormContext"
import { NumberField } from "./inputs/formNumberInput"
import { SelectField } from "./inputs/formSelectInput"
import { TextField } from "./inputs/formTextInput"

export interface FormProps<T extends {[x:string]: any}>{
    children: React.ReactNode
    changeValue: (name:string, data: any)=>void
    value: T
}

const BaseForm = <T extends {[x:string]: any},>({children, value, changeValue}:FormProps<T>) => {

    return(
        <formContext.Provider value={{value, changeField: changeValue}}>
            {children}
        </formContext.Provider>
    )

}


export const Form = Object.assign(BaseForm, {
    TextInput: TextField,
    NumberInput: NumberField,
    SelectInput: SelectField
})