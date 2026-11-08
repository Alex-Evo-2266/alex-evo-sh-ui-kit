import { act, fireEvent, render, screen } from "@testing-library/react"
import { createRef } from "react"
import { describe, expect, it, vi } from "vitest"
import { Form, FormRef } from "./Form"

interface TestValues {
    first: string
    second: string
    nested: { value: string }
    items: string[]
}

const getInitialValues = (): TestValues => ({
    first: "initial",
    second: "untouched",
    nested: { value: "nested initial" },
    items: ["initial item"]
})

describe("Form values", () => {
    it("makes user changes available synchronously and keeps controlled fields in sync", () => {
        const formRef = createRef<FormRef<TestValues>>()
        const changeSnapshots: Array<TestValues | undefined> = []

        render(
            <Form
                ref={formRef}
                value={getInitialValues()}
                onChangeValue={() => changeSnapshots.push(formRef.current?.getValues())}
            >
                <Form.TextInput name="first" />
            </Form>
        )

        fireEvent.change(screen.getByRole("textbox"), { target: { value: "updated" } })

        expect(changeSnapshots[0]?.first).toBe("updated")
        expect(formRef.current?.getValues()).toEqual({
            ...getInitialValues(),
            first: "updated"
        })
        expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe("updated")
    })

    it("preserves sequential, nested, and array updates", () => {
        const formRef = createRef<FormRef<TestValues>>()
        render(<Form ref={formRef} value={getInitialValues()}>{null}</Form>)

        act(() => {
            formRef.current?.setFieldValue("first", "one")
            formRef.current?.setFieldValue("first", "two")
            formRef.current?.setFieldValue("nested", { value: "nested updated" })
            formRef.current?.setFieldValue("items", ["updated item"])

            expect(formRef.current?.getValues()).toEqual({
                first: "two",
                second: "untouched",
                nested: { value: "nested updated" },
                items: ["updated item"]
            })
        })
    })

    it("submits the latest value immediately after a programmatic update", () => {
        const formRef = createRef<FormRef<TestValues>>()
        const onFinish = vi.fn()
        render(
            <Form ref={formRef} value={getInitialValues()} onFinish={onFinish}>
                {null}
            </Form>
        )

        act(() => {
            formRef.current?.setFieldValue("first", "submitted")
            formRef.current?.submit()
        })

        expect(onFinish).toHaveBeenCalledWith({
            ...getInitialValues(),
            first: "submitted"
        })
    })

    it("keeps setValues and reset synchronously readable", () => {
        const formRef = createRef<FormRef<TestValues>>()
        const initialValues = getInitialValues()
        render(<Form ref={formRef} value={initialValues}>{null}</Form>)

        act(() => {
            formRef.current?.setValues({ ...initialValues, first: "programmatic" })
            expect(formRef.current?.getValues().first).toBe("programmatic")

            formRef.current?.reset()
            expect(formRef.current?.getValues()).toEqual(initialValues)
        })
    })
})
