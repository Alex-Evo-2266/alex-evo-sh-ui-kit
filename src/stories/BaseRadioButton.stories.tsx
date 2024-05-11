

import type { Meta, StoryObj } from '@storybook/react';
import { BaseRadioButton } from '../lib/index';

const meta = {
  title: 'Components/BaseComponents/BaseRadioButton',
  component: BaseRadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { 
    name: "test"
   },
} satisfies Meta<typeof BaseRadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
