import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../lib/index';


const meta = {
  title: 'BaseComponents/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { styleContainer:{
    minWidth: "300px"
  }  },
} satisfies Meta<typeof TextArea>;

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