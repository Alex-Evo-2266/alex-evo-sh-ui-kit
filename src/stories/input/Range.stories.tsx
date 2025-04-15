import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Range } from '../../lib/index';

const meta = {
  title: 'Components/Input/Range',
  component: Range,
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
} satisfies Meta<typeof Range>;

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
  
  export const visibleValue: Story = {
    args: {
        max: 100,
        showValue: true,
        step: 10
    },
  };

  export const point: Story = {
    args: {
        max: 100,
        step: 1,
        styleTrack: 'point',
        showValue: false,
        colorRange: "#cbc",
        colorBg: `linear-gradient(
          to right,
          hsl(0, 100%, 50%),
          hsl(60, 100%, 50%),
          hsl(120, 100%, 50%),
          hsl(180, 100%, 50%),
          hsl(240, 100%, 50%),
          hsl(300, 100%, 50%),
          hsl(360, 100%, 50%)
        )`
    },
  };
  export const point2: Story = {
    args: {
        max: 100,
        step: 1,
        styleTrack: 'point',
        showValue: false,
        colorRange: "#cbc"
    },
  };
  export const pointVertical: Story = {
    args: {
        max: 100,
        step: 1,
        styleTrack: 'point',
        showValue: false,
        colorRange: "#cbc",
        orientation: 'vertical',
        style: {height: "200px"},
        colorBg: `linear-gradient(
          to right,
          hsl(0, 100%, 50%),
          hsl(60, 100%, 50%),
          hsl(120, 100%, 50%),
          hsl(180, 100%, 50%),
          hsl(240, 100%, 50%),
          hsl(300, 100%, 50%),
          hsl(360, 100%, 50%)
        )`
    },
  };

  export const vertical: Story = {
    args: {
        max: 100,
        style: {height: "200px"},
        step: 10,
        showValue: true,
        orientation: 'vertical',
        styleTrack: 'point'
    },
  };
  