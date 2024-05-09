import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../lib/index';

const meta = {
  title: 'BaseComponents/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};


export const Text: Story = {
    args: {
        text: "test"
    },
  };
  