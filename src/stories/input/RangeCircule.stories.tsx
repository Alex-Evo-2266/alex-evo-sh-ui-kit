import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CircleInput from '../../lib/ui/input/Range/RangeCircle';

const meta = {
  title: 'Components/Input/CircleInput',
  component: CircleInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { 
    onChange: fn,
    value: 50,
    rounding: false
   },
} satisfies Meta<typeof CircleInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  },
};
