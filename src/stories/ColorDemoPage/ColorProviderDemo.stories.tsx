

import type { Meta, StoryObj } from '@storybook/react';
import { ColorProviderDemo } from './ColorProviderDemo';

const meta = {
  title: 'Theme/ProviderColorDemo',
  component: ColorProviderDemo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof ColorProviderDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

