import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from '../../../lib/ui/input/ColorField/ColorPicker';

const meta = {
  title: 'Components/Input/Pickers/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    beginColor:"#ff0"
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};
