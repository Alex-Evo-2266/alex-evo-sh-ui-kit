import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '../lib/index';

const meta = {
  title: 'BaseComponents/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { styleContainer:{
    minWidth: "300px"
  }  },
} satisfies Meta<typeof TextField>;

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
  
  