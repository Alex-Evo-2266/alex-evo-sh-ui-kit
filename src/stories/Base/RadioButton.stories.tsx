

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { RadioButton } from '../../lib/index';


const meta = {
  title: 'Components/Base/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { 
    onChange: fn(),
    name: "test"
   },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
