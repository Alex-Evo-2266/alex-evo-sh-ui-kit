

import type { Meta, StoryObj } from '@storybook/react';
import { TestTimePage } from './TestTimeFieldPage';

const meta = {
  title: 'DemoPages/Input/TimeField',
  component: TestTimePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof TestTimePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

