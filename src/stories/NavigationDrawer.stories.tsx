import type { Meta, StoryObj } from '@storybook/react';
import { NavigationDrawer } from '../lib/index';
import { Box, Home } from 'lucide-react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Navigation/NavigationDrawer',
  component: NavigationDrawer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    
  },
  args: {
    mainBtn:[{
        icon: <Box/>,
        onClick: ()=>{},
        text: "serdth",
        type: "button",
        active: true
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
    onHide: fn,
    openAlways: true,
    otherBtn:[
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
} satisfies Meta<typeof NavigationDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};

export const noOpenAlways: Story = {
    args: {
        openAlways: false,
    },
  };
  