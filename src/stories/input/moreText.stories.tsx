import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { MoreText } from '../../lib'

const meta: Meta<typeof MoreText> = {
  title: 'Components/Input/MoreText',
  component: MoreText,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Current value (joined string)'
    },
    onChange: {
      action: 'changed',
      description: 'Callback when value changes'
    },
    border: {
      control: 'boolean',
      description: 'Show border around input field'
    },
    minWidth: {
      control: 'text',
      description: 'Minimum width of the component'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field'
    },
    addButtonLabel: {
      control: 'text',
      description: 'Label for the add button'
    },
    separator: {
      control: 'text',
      description: 'Character used to join/split values'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the component'
    }
  }
}

export default meta

type Story = StoryObj<typeof MoreText>

export const Default: Story = {
  args: {
    placeholder: 'Enter tags...',
    addButtonLabel: 'Add tag'
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return <MoreText {...args} value={value} onChange={setValue} />
  }
}

export const WithInitialValues: Story = {
  args: {
    value: 'React,TypeScript,Storybook',
    placeholder: 'Add more skills...'
  }
}

export const WithCustomSeparator: Story = {
  args: {
    value: 'Red|Green|Blue',
    separator: '|',
    placeholder: 'Add color (use | as separator)'
  }
}

export const Disabled: Story = {
  args: {
    value: 'Cannot,edit,this',
    disabled: true
  }
}

export const WithBorder: Story = {
  args: {
    value: '',
    border: true,
    placeholder: 'Bordered input...'
  }
}