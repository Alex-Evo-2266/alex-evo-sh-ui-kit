import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../../lib/index';

const meta = {
  title: 'Components/Other/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
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
  