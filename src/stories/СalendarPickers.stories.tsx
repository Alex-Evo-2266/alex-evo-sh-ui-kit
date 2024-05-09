import type { Meta, StoryObj } from '@storybook/react';
import { СalendarPickers } from '../lib/index';

const meta = {
  title: 'HideComponents/СalendarPickers',
  component: СalendarPickers,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {},
} satisfies Meta<typeof СalendarPickers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
