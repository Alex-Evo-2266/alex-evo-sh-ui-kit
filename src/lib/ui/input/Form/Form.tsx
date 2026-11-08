import { FormHTMLAttributes, forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react"
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
    onChangeValue?: (name: keyof T, value: T[keyof T])=>void
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
        {children, value, name, errors, onFinish, onChangeValue, ...props}:FormProps<T>,
        ref: React.Ref<FormRef<T>>
    ){

    const valuesRef = useRef(value)
    const [renderValues, setRenderValues] = useState<T>(value)

    const updateValues = useCallback((nextValues: T) => {
        valuesRef.current = nextValues
        setRenderValues(nextValues)
    }, [])

    const submiteHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onFinish?.(valuesRef.current)
    },[onFinish])

    const changeHandler = useCallback(<K extends keyof T>(name: K, data: T[K]) => {
        updateValues({
            ...valuesRef.current, [name]: data
        })
        onChangeValue?.(name, data)
    },[onChangeValue, updateValues])

    useImperativeHandle(ref, () => ({
        submit: () => onFinish?.(valuesRef.current),
        setFieldValue: (name, value) => {
            updateValues({ ...valuesRef.current, [name]: value })
        },
        setValues: updateValues,
        getValues: () => valuesRef.current,
        reset: () => updateValues(value)
    }),[onFinish, updateValues, value])

    return(
        <formContext.Provider value={{value: renderValues, changeField: changeHandler, errors}}>
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