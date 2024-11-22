

import type { Meta, StoryObj } from '@storybook/react';
import { TestFormPage } from './demoFormPage';

const meta = {
  title: 'DemoPages/Input/FormBase',
  component: TestFormPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof TestFormPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

export const Errors: Story = {
  args: {
   errors:{
    name: "test"
   }
  },
};

