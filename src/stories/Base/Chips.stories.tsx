import type { Meta, StoryObj } from '@storybook/react';
import { Chips } from '../../lib/index';

const meta = {
  title: 'Components/Base/Chips',
  component: Chips,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {text:"test1"},
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};

export const Click: Story = {
  args: {
    onClick: ()=>console.log("click")
  },
};

export const DeleteBtn: Story = {
  args: {
   onClick: ()=>console.log("click"),
   onDelete: ()=>console.log("delete")
  },
};

export const Big: Story = {
  args: {
    big: true
  },
};

export const DeleteBtnAndBig: Story = {
  args: {
   onClick: ()=>console.log("click"),
   onDelete: ()=>console.log("delete"),
   big: true
  },
};