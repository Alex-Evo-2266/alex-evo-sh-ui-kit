

import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheetsPage2 } from './BottomSheetsPage';

const meta = {
  title: 'DemoPages/BottomSheetsPage',
  component: BottomSheetsPage2,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof BottomSheetsPage2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

