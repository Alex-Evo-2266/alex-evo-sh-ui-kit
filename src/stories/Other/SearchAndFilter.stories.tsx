import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SearchAndFilter } from '../../lib/index';

const meta = {
  title: 'Components/Other/SearchAndFilter',
  component: SearchAndFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { 
    onSearch: fn,
    placeholder: "search",
    selectedFilters: {p:['p2']},
    filters: [{name:"p", options:['p1', 'p2']},{name:"o", options:['o1', 'o2']}],
    onChangeFilter: (d)=>console.log(d),
   },
} satisfies Meta<typeof SearchAndFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  },
};
