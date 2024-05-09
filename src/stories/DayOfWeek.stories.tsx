import type { Meta, StoryObj } from '@storybook/react';
import { DayOfWeekField } from '../lib/index';

const meta = {
  title: 'HideComponents/DayOfWeekField',
  component: DayOfWeekField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {},
} satisfies Meta<typeof DayOfWeekField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
