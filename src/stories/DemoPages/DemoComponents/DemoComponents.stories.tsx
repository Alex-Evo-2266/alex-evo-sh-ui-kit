

import type { Meta, StoryObj } from '@storybook/react';
import { ComponentsDemoPage } from './DemoComponentsPage';

const meta = {
  title: 'DemoPages/ComponentsDemoPage',
  component: ComponentsDemoPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof ComponentsDemoPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

