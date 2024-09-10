

import type { Meta, StoryObj } from '@storybook/react';
import { SelectDemoPage } from './SelectDemoPage';

const meta = {
  title: 'DemoPages/SelectDemoPage',
  component: SelectDemoPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof SelectDemoPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

