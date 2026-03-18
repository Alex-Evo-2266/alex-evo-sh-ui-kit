import { FormHTMLAttributes, forwardRef, useCallback, useImperativeHandle, useState } from "react"
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
import { TimeField } from "./inputs/formTimeInput"

export interface FormProps<T> extends FormHTMLAttributes<HTMLFormElement>{
    children: React.ReactNode
    onFinish?: (data:T)=>void
    value: T
    name?: string
    errors?: Partial<Record<keyof T, string>>
}

export interface FormRef<T> {
  submit: () => void
  setFieldValue: (name: keyof T, value: T[keyof T]) => void
  setValues: (values: T) => void
  getValues: () => T
  reset: () => void
}

export type FormComponent = <T>(
  props: FormProps<T> & { ref?: React.Ref<FormRef<T>> }
) => React.ReactNode | null;

const BaseForm = forwardRef(
    function BaseForm<T>(
        {children, value, name, errors, onFinish, ...props}:FormProps<T>,
        ref: React.Ref<FormRef<T>>
    ){

    const [values, setValues] = useState<T>(value)

    const submiteHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onFinish?.(values)
    },[onFinish, values])

    const changeHandler = useCallback(<K extends keyof T>(name: K, data: T[K]) => {
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
        reset: () => setValues(value)
    }),[onFinish, values, value])

    return(
        <formContext.Provider value={{value: values, changeField: changeHandler, errors}}>
            <form name={name} onSubmit={submiteHandler} noValidate {...props}>
            {children}
            </form>
        </formContext.Provider>
    )
}) as FormComponent


export const Form = Object.assign(BaseForm, {
    TextInput: TextField,
    NumberInput: NumberField,
    SelectInput: SelectField,
    SwitchField: SwitchField,
    SwitchButtonField: SwitchButtonField,
    MoreTextField: MoreTextField,
    TextArea: TextAreaField,
    DateField: DateField,
    TimeField: TimeField
})