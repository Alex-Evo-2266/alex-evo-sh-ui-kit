

import type { Meta, StoryObj } from '@storybook/react';
import { MenuDemoPage } from './MenuDemoPage';

const meta = {
  title: 'DemoPages/MenuDemoPage',
  component: MenuDemoPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof MenuDemoPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

