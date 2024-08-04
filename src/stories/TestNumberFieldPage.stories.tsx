

import type { Meta, StoryObj } from '@storybook/react';
import { TestNumberPage } from './TestPages/NumberFieldPage';

const meta = {
  title: 'Components/Fields/Test/NumberFieldTest',
  component: TestNumberPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof TestNumberPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

