import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FilterIcon, IconButton, LampIcon, Search } from '../../lib/index';

const meta = {
  title: 'Components/Other/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { 
    onSearch: fn,
    placeholder: "search"
   },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  },
};

export const MenuBtn: Story = {
    args: {
        btn: {
          icon: <LampIcon/>,
          onClick: ()=> console.log("yt")
        }
    },
  };
  

export const MenuBtn2: Story = {
    args: {
        btnComponent:<IconButton rippleDisabled icon={<FilterIcon/>} onClick={()=>console.log("d")}/>
    },
  };
  