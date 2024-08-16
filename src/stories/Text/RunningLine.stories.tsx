import type { Meta, StoryObj } from '@storybook/react';
import { RunningLine } from '../../lib/index';

const meta = {
  title: 'Components/Text/RunningLine',
  component: RunningLine,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    style: {width:"200px"}
  },
} satisfies Meta<typeof RunningLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: "test"
  },
};


export const Long: Story = {
    args: {
      text: "asedhd awh jrd etse jdxdrtj rysddxdf  f gfxf"
    },
  };
  