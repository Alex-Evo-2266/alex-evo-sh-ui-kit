

import type { Meta, StoryObj } from '@storybook/react';
import { TestColorPage } from './TestColorFieldPage';

const meta = {
  title: 'DemoPages/input/ColorField',
  component: TestColorPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof TestColorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

