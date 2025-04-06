import { StoryObj, Meta } from "@storybook/react"
import { useState } from "react"
import { TimeField } from "../../lib"

const meta: Meta<typeof TimeField> = {
  title: "Components/Input/TimeField",
  component: TimeField,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    border: {
      control: "boolean",
      description: "Whether to show border around the field"
    },
    error: {
      control: "boolean",
      description: "Whether to show error state"
    },
    validEmptyValue: {
      control: "boolean",
      description: "Whether empty value is considered valid"
    },
    disabled: {
      control: "boolean",
      description: "Whether the field is disabled"
    },
    container: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
A customizable time input field with a popup time picker.

### When to Use
- When you need a time input with a better UX than native time input
- When you need consistent time formatting
- When you need validation for empty values

### Features
- Custom time picker dialog
- Validation for empty values
- Error state display
- Customizable styling
- Accessible keyboard navigation
        `
      }
    }
  },
  args:{
    container: document.body
  }
}

export default meta

type Story = StoryObj<typeof TimeField>

export const Default: Story = {
  args: {
    name: "time-input",
    border: true
  }
}

export const WithInitialValue: Story = {
  args: {
    value: "09:30",
    border: true
  }
}

export const WithError: Story = {
  args: {
    error: true,
    border: true,
    errorText: "error text"
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "14:00",
    border: true
  }
}

export const InteractiveExample = () => {
  const [time, setTime] = useState("")
  return (
    <div>
      <TimeField 
        container={document.body}
        value={time} 
        onChange={setTime} 
        border 
        validEmptyValue={false}
      />
      <p style={{ marginTop: "1rem" }}>
        Selected time: {time || "Not selected"}
      </p>
    </div>
  )
}
InteractiveExample.parameters = {
  docs: {
    description: {
      story: "An interactive example of TimeField with state management."
    }
  }
}