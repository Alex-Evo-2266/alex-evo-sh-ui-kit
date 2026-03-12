import { forwardRef, useCallback, useImperativeHandle, useState } from "react"
import { formContext } from "./FormContext"
import { MoreTextField } from "./inputs/formMoreText"
import { NumberField } from "./inputs/formNumberInput"
import { SelectField } from "./inputs/formSelectInput"
import { SwitchField } from "./inputs/formSwitch"
import { SwitchButtonField } from "./inputs/formSwitchButton"
import { TextField } from "./inputs/formTextInput"
import './inputs/styleInput.scss'
import { TextAreaField } from "./inputs/formTextArea"
import { DateField } from "./inputs/formDateInput"

export interface FormProps<T extends Record<string, unknown>>{
    children: React.ReactNode
    onFinish?: (data:{[x:string]: unknown})=>void
    value?: T
    name?: string
    errors?: Record<string, string>
}

export interface FormRef {
  submit: () => void
  setFieldValue: (name: string, value: unknown) => void
  setValues: (values: Record<string, unknown>) => void
  getValues: () => Record<string, unknown>
  reset: () => void
}

const BaseForm = forwardRef(
    function BaseForm<T extends Record<string, unknown>>(
        {children, value, name, errors, onFinish}:FormProps<T>,
        ref: React.Ref<FormRef>
    ){

    const [values, setValues] = useState<{
        [x: string]: unknown
    }>(value ?? {})

    const submiteHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onFinish?.(values)
    },[onFinish, values])

    const changeHandler = useCallback((name: string, data: unknown) => {
        setValues(prev=>({
            ...prev, [name]: data
        }))
    },[])

    useImperativeHandle(ref, () => ({
        submit: () => onFinish?.(values),
        setFieldValue: (name, value) => {
            setValues(prev=>({ ...prev, [name]: value }))
        },
        setValues: (v) => setValues(v),
        getValues: () => values,
        reset: () => setValues(value ?? {})
    }),[onFinish, values, value])

    return(
        <formContext.Provider value={{value: values, changeField: changeHandler, errors}}>
            <form name={name} onSubmit={submiteHandler} noValidate>
            {children}
            </form>
        </formContext.Provider>
    )
})


export const Form = Object.assign(BaseForm, {
    TextInput: TextField,
    NumberInput: NumberField,
    SelectInput: SelectField,
    SwitchField: SwitchField,
    SwitchButtonField: SwitchButtonField,
    MoreTextField: MoreTextField,
    TextArea: TextAreaField,
    DateField: DateField
})