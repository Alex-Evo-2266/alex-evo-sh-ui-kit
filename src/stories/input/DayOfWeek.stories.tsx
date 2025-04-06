import type { Meta, StoryObj } from '@storybook/react';
import { DayOfWeekField } from '../../lib';

const meta: Meta<typeof DayOfWeekField> = {
  title: 'Components/Input/DayOfWeekField',
  component: DayOfWeekField,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'multi-select',
      options: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      description: 'Currently selected days',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when selected days change',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the container',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof DayOfWeekField>;

export const Default: Story = {
  args: {
    value: ['Mon', 'Wed', 'Fri'],
  },
};

export const Empty: Story = {
  args: {
    value: [],
  },
};

export const AllDaysSelected: Story = {
  args: {
    value: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
};

export const WeekendOnly: Story = {
  args: {
    value: ['Sat', 'Sun'],
  },
};

export const WeekdaysOnly: Story = {
  args: {
    value: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  },
};