

import type { Meta, StoryObj } from '@storybook/react';
import { TestPage2 } from './TestModalPage2';

const meta = {
  title: 'DemoPages/Dialogs/Test2',
  component: TestPage2,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof TestPage2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

