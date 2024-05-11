import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Slider } from '../lib/index';

const meta = {
  title: 'Components/BaseComponents/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { 
    onChange: fn,
    value: 0
   },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  },
};

export const MinMax: Story = {
    args: {
        min: -1000,
        max: 1000
    },
  };
  
export const MinMaxDisplay: Story = {
    args: {
        min: -1000,
        max: 1000,
        maxMinDisplay: true
    },
  };
  
  export const Step: Story = {
    args: {
        max: 100,
        maxMinDisplay: true,
        step: 10
    },
  };
  