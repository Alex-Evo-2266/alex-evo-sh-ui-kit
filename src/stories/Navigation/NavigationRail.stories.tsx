import type { Meta, StoryObj } from '@storybook/react';
import { Home, NavigationRail, Plug } from '../../lib/index';

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
        icon: <Plug/>,
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
        icon: <Plug/>,
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
  