import type { Meta, StoryObj } from '@storybook/react';
import { Card, ContentBox, TextField } from '../../lib/index';
import { Trash } from 'lucide-react';
// import React from 'react';

const meta = {
  title: 'Components/Layout/ContentBox',
  component: ContentBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    label: "test H",
    children: <>
    <TextField placeholder='test'  border styleContainer={{minWidth: "300px"}}/>
    <TextField placeholder='test'  border styleContainer={{minWidth: "300px"}}/>
    <TextField placeholder='test'  border styleContainer={{minWidth: "300px"}}/>
    <Card header='sgdfdf' text='labessdfbgnmcdf sg szg szgbdfh zshdbns xdg hzxngf '/>
    </>
  },
} satisfies Meta<typeof ContentBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

export const Border: Story = {
  args: {
   border: true,
   hiding: true
  },
};

export const BorderIcon: Story = {
  args: {
   border: true,
   hiding: true,
   action:{
    onClick: ()=>{},
    icon: <Trash/>
   }
  },
};
