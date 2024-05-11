import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from '../lib/index';
import { Box, Home, Menu } from 'lucide-react';

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
        icon: <Menu/>,
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
        icon: <Box/>,
        onClick: ()=>{},
        text: "room",
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
            icon: <Menu/>,
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
            icon: <Box/>,
            onClick: ()=>{},
            text: "room",
            type: "button"
           },
           {
            icon: <Box/>,
            onClick: ()=>{},
            text: "room",
            type: "button"
           }]
    },
  };