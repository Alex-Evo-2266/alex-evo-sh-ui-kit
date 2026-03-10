import { useCallback, useState } from "react"
import { formContext } from "./FormContext"
import { MoreTextField } from "./inputs/formMoreText"
import { NumberField } from "./inputs/formNumberInput"
import { SelectField } from "./inputs/formSelectInput"
import { SwitchField } from "./inputs/formSwitch"
import { SwitchButtonField } from "./inputs/formSwitchButton"
import { TextField } from "./inputs/formTextInput"
import './inputs/styleInput.scss'

export interface FormProps<T extends {[x:string]: unknown}>{
    children: React.ReactNode
    onFinish?: (data:{[x:string]: unknown})=>void
    value?: T
    name?: string
    errors?: {[key:string]:string}
}

const BaseForm = <T extends {[x:string]: any},>({children, value, name, errors, onFinish}:FormProps<T>) => {

    const [values, setValues] = useState<{
        [x: string]: unknown
    }>(value ?? {})

    const submiteHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onFinish?.(values)
    },[onFinish, values])

    const changeHandler = (name: string, data: unknown) => {
        setValues(prev=>({
            ...prev, [name]: data
        }))
    }

    return(
        <formContext.Provider value={{value: values, changeField: changeHandler, errors}}>
            <form name={name} onSubmit={submiteHandler} noValidate>
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