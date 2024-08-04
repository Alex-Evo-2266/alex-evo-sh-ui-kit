import type { Meta, StoryObj } from '@storybook/react';
import { NumberField } from '../lib/index';

const meta = {
  title: 'Components/Fields/NumberField',
  component: NumberField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { styleContainer:{
    minWidth: "300px"
  },
  onChange:(event)=>{
    console.log(event)
  },
  },
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};

export const Placeholder: Story = {
    args: {
        placeholder: "test"
    },
  };
  

  export const Border: Story = {
    args: {
        border:true
    },
  };
  
  export const BorderAndPlaceholder: Story = {
    args: {
        border:true,
        placeholder: "test",
    },
  };
  

  export const ErrorBorder: Story = {
    args: {
        validEmptyValue: true,
        border:true,
        placeholder: "test",
    },
  };
  

  export const Error: Story = {
    args: {
        validEmptyValue: true,
        placeholder: "test",
    },
  };

  export const BtnClean: Story = {
    args: {
        placeholder: "test",
        onClear: ()=>{}
    },
  };
  
  