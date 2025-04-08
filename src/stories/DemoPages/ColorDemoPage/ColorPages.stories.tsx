

import type { Meta, StoryObj } from '@storybook/react';
import { ColorPage } from './ColorPages';

const meta = {
  title: 'Theme/Color Palette 2',
  component: ColorPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof ColorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

