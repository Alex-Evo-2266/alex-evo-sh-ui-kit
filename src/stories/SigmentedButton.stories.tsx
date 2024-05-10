import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SigmentedButton } from '../lib/index';

const meta = {
  title: 'BaseComponents/SigmentedButton',
  component: SigmentedButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { 
    items:["btn1", "btn2", "btn3"],
    onChange: fn
   },
} satisfies Meta<typeof SigmentedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  },
};


export const Multiple: Story = {
    args: {
        multiple:true
    },
  };
  

  export const Defalt: Story = {
    args: {
        multiple:true,
        value: ["btn1", "btn3"]
    },
  };
  