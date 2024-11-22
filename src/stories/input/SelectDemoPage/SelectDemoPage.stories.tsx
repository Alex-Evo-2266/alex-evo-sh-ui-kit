

import type { Meta, StoryObj } from '@storybook/react';
import { SelectDemoPage } from './SelectDemoPage';
import { SelectField } from '../../../lib';

const meta = {
  title: 'DemoPages/SelectDemoPage',
  component: SelectDemoPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

export const Placeholder: Story = {
  args: {
   placeholder: "test"
  },
};
