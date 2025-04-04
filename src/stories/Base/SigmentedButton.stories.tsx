import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SegmentedButton } from '../../lib/index';

const meta = {
  title: 'Components/Base/SegmentedButton',
  component: SegmentedButton,
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
} satisfies Meta<typeof SegmentedButton>;

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
  

  export const ReadOnly: Story = {
    args: {
        multiple:true,
        value: ["btn1", "btn3"],
        readOnly: true
    },
  };
  