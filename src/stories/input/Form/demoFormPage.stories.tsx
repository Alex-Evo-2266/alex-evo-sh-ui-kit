import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "../../../lib";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  subcomponents: {
    // TextInput: Form.TextInput,
    // NumberInput: Form.NumberInput,
    // SelectInput: Form.SelectInput,
    // SwitchField: Form.SwitchField,
    // SwitchButtonField: Form.SwitchButtonField,
    // MoreTextField: Form.MoreTextField,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Basic: Story = {
  render: () => {
    const [result, setResult] = useState<any>();

    return (
      <div style={{ maxWidth: 400 }}>
        <Form
          name="demoForm"
          onFinish={(data) => {
            console.log("submit", data);
            setResult(data);
          }}
        >
          <Form.TextInput
            name="name"
            // label="Name"
            placeholder="Enter name"
          />

          <Form.NumberInput
            name="age"
            // label="Age"
            placeholder="Enter age"
          />

          <Form.SelectInput
            name="role"
            // label="Role"
            items={[
              { title: "User", value: "user" },
              { title: "Admin", value: "admin" },
            ]}
          />

          <Form.SwitchField
            name="active"
            // label="Active"
          />

          <Form.SwitchButtonField
            name="notifications"
            // label="Notifications"
          />

          <Form.MoreTextField
            name="description"
            // label="Description"
            placeholder="Enter description"
          />

          <button type="submit">Submit</button>
        </Form>

        {result && (
          <pre style={{ marginTop: 20 }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>
    );
  },
};

export const WithDefaultValues: Story = {
  render: () => (
    <Form
      name="defaultValues"
      value={{
        name: "Alex",
        age: 25,
        role: "admin",
        active: true,
        notifications: false,
        description: "Example text",
      }}
      onFinish={(data) => console.log(data)}
    >
      <Form.TextInput name="name" helperText="Name" />
      <Form.NumberInput name="age" helperText="Age" />
      <Form.SelectInput
        name="role"
        // label="Role"
        items={[
          { title: "User", value: "user" },
          { title: "Admin", value: "admin" },
        ]}
      />
      <Form.SwitchField name="active" />
      <Form.SwitchButtonField name="notifications"/>
      <Form.MoreTextField name="description" helperText="Description" />

      <button type="submit">Submit</button>
    </Form>
  ),
};

export const WithErrors: Story = {
  render: () => (
    <Form
      name="errors"
      errors={{
        name: "Name is required",
        age: "Invalid age",
      }}
      onFinish={(data) => console.log(data)}
    >
      <Form.TextInput name="name" helperText="Name" />
      <Form.NumberInput name="age" helperText="Age" />
      <button type="submit">Submit</button>
    </Form>
  ),
};