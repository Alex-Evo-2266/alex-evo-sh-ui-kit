import type { Meta, StoryObj } from '@storybook/react';
import { Home, MenuIcon, NavigationBar, Plus } from '../../lib/index';

const meta = {
  title: 'Components/Navigation/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    
  },
  args: {
    btns:[{
        icon: <MenuIcon/>,
        onClick: ()=>{},
        text: "menu",
        type: "button"
       },
       {
        icon: <Home/>,
        onClick: ()=>{},
        text: "home",
        type: "button"
       },
       {
        icon: <Plus/>,
        onClick: ()=>{},
        text: "plus",
        type: "button"
       }]
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

export const Btns4: Story = {
    args: {
        btns:[{
            icon: <MenuIcon/>,
            onClick: ()=>{},
            text: "menu",
            type: "button"
           },
           {
            icon: <Home/>,
            onClick: ()=>{},
            text: "home",
            type: "button"
           },
           {
            icon: <Plus/>,
            onClick: ()=>{},
            text: "room",
            type: "button"
           },
           {
            icon: <Plus/>,
            onClick: ()=>{},
            text: "room",
            type: "button"
           }]
    },
  };