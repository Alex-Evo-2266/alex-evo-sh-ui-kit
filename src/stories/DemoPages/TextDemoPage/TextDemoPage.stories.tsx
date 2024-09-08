

import type { Meta, StoryObj } from '@storybook/react';
import { TextDemoPage } from './TextDemoPage';

const meta = {
  title: 'DemoPages/TextDemo',
  component: TextDemoPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof TextDemoPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

