import type { Meta, StoryObj } from '@storybook/react';
import { NavigationRail } from '../../lib/index';
import { Box, Home } from 'lucide-react';

const meta = {
  title: 'Components/Navigation/NavigationRail',
  component: NavigationRail,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    
  },
  args: {
    mainBtn:[{
        icon: <Box/>,
        onClick: ()=>{},
        text: "",
        type: "button"
       },
       {
        icon: <Home/>,
        onClick: ()=>{},
        text: "home",
        type: "button"
       },
       {
        icon: <Box/>,
        onClick: ()=>{},
        text: "room",
        type: "button"
       }],
    firstBtn: {
        icon: <Home/>,
        onClick: ()=>{},
        text: "home",
        type: "button"
       },
    backBtn: {
        icon: <Home/>,
        onClick: ()=>{},
        text: "home",
        type: "button"
       },
  },
} satisfies Meta<typeof NavigationRail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};

export const MenuToggle: Story = {
    args: {
        onToggleMenu: ()=>{}
    },
  };
  