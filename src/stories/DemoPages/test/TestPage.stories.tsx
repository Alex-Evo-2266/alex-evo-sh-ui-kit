

import type { Meta, StoryObj } from '@storybook/react';
import TestPage from './TestPage';

const meta = {
  title: 'DemoPages/Test/Test',
  component: TestPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof TestPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

