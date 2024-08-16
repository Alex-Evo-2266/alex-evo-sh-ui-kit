

import type { Meta, StoryObj } from '@storybook/react';
import { TestDatePage } from './TestDateFieldPage';

const meta = {
  title: 'DemoPages/Input/DataField',
  component: TestDatePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof TestDatePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

