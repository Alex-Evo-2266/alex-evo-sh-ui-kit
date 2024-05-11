import type { Meta, StoryObj } from '@storybook/react';
import { FAB } from '../lib/index';
import { Plus } from 'lucide-react';
// import React from 'react';


const meta = {
  title: 'Components/BaseComponents/FAB',
  component: FAB,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    icon: <Plus/>
  },
} satisfies Meta<typeof FAB>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  },
};

export const Text: Story = {
    args: {
      children: "text"
    },
  };
  