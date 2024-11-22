

import type { Meta, StoryObj } from '@storybook/react';
import { IconDemoPage } from './iconPage';

const meta = {
  title: 'Icons/Icons',
  component: IconDemoPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof IconDemoPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

