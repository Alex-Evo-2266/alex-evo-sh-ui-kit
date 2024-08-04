import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from '../../lib/index';

const meta = {
  title: 'Components/Fields/Pickers/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    onChange: (h,m)=>console.log(h,m),
    onHide: ()=>{},
    hours: 0,
    minutes: 0
},
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
