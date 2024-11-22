import { useEffect, useState } from "react"
import { Button, Form } from "../../../lib"

type ValueType = {
    name: string
    data: string
    n: string
}

export type TestFormPageProps = {
    errors?:{[key:string]:string}
}

export const TestFormPage = ({errors}:TestFormPageProps) => {

    const [visible, setVisible] = useState(false)

    const def:ValueType = {
        name: "erg",
        data: "fgb",
        n: '9'
    }

    const [value, setValue] = useState<ValueType>(def)

    const change = (name: string, data: any)=>{
        setValue(prev=>({...prev, [name]:data}))
    }

    useEffect(()=>{
        console.log('value', value)
    },[value])

    return (
        <>
        <div id="test-select"></div>
        <Button onClick={()=>setVisible(true)}>open</Button>
        {
            visible && 
            <Form value={value} changeValue={change} errors={errors}>
                <Form.TextInput name="name" border placeholder="name"/>
                <Form.TextInput name="data" border clear/>
                <Form.NumberInput name="n" border clear/>
                <Form.NumberInput name="n" border clear/>
                <Form.SelectInput container_id="test-select" items={["test1", "test2", "test3"]} name="n" border/>
                <Form.SelectInput container_id="test-select" items={["test1", "test2", "test3"]} name="n" border/>
                <Form.SwitchField items={["test1", "test2", "test3"]} name="n"/>
            </Form>
        }
        </>
        
    )
}