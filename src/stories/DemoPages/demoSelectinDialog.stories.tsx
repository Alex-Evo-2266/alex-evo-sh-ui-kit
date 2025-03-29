

import type { Meta, StoryObj } from '@storybook/react';
import { SelectInDialogDemoPage } from './demoSelectinDialog';

const meta = {
  title: 'DemoPages/SelectInDialogDemoPage',
  component: SelectInDialogDemoPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof SelectInDialogDemoPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

