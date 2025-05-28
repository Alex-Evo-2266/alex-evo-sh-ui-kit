import type { Meta, StoryObj } from '@storybook/react';
import { MultiFilter } from '../../lib/index';

const meta = {
  title: 'Components/Other/MultiFilter',
  component: MultiFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { 
    filters: [{name:"p", options:['p1', 'p2']},{name:"o", options:['o1', 'o2']}],
    onChange: (d)=>console.log(d),
    onClose: ()=>{},
    selectedFilters: {p:['p2']},
    isOpen: true
   },
} satisfies Meta<typeof MultiFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};
