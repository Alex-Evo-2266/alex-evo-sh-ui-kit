import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../lib/index';

const meta = {
  title: 'BaseComponents/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    styleType: "base",
    children: 'Button',
  },
};


export const Text: Story = {
    args: {
      styleType: "text",
      children: 'Button',
    },
  };

export const Filled: Story = {
    args: {
      styleType: "filled",
      children: 'Button',
    },
};

export const FilledTotal: Story = {
    args: {
      styleType: "filledTotal",
      children: 'Button',
    },
  };

  export const Outline: Story = {
    args: {
      styleType: "outline",
      children: 'Button',
    },
  };