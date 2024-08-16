import type { Meta, StoryObj } from '@storybook/react';
import { MoreText } from '../../lib/index';


const meta = {
  title: 'Components/Text/MoreText',
  component: MoreText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {minWidth: "300px"},
} satisfies Meta<typeof MoreText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   value:"test"
  },
};

export const Border: Story = {
  args: {
   value:"test",
   border: true
  },
};
