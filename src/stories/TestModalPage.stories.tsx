

import type { Meta, StoryObj } from '@storybook/react';
import { TestPage } from './TestModalPage';

const meta = {
  title: 'Pages/Dialogs/Test',
  component: TestPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof TestPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

