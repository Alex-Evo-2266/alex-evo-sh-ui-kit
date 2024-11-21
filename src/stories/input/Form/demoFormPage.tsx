import { useEffect, useState } from "react"
import { Divider, Form } from "../../../lib"

type ValueType = {
    name: string
    data: string
    n: string
}

export const TestFormPage = () => {

    const def:ValueType = {
        name: "erg",
        data: "fgb",
        n: '9'
    }

    const [value, setValue] = useState<ValueType>(def)
    const [value2, setValue2] = useState<ValueType>(def)

    const change = (name: string, data: any)=>{
        setValue(prev=>({...prev, [name]:data}))
    }

    const change2 = (name: string, data: any)=>{
        setValue2(prev=>({...prev, [name]:data}))
    }

    useEffect(()=>{
        console.log('value', value)
    },[value])

    useEffect(()=>{
        console.log('value2', value2)
    },[value2])

    return (
        <Form value={value} changeValue={change}>
            <Form.TextInput name="name" border placeholder="name"/>
            <Form.TextInput name="data" border clear/>
            <Form.NumberInput name="n" border clear/>
            <Divider/>
            <Form value={value2} changeValue={change2}>
                <Form.TextInput name="name" border placeholder="name"/>
                <Form.TextInput name="data" border clear/>
                <Form.NumberInput name="n" border clear/>
            </Form>
        </Form>
    )
}