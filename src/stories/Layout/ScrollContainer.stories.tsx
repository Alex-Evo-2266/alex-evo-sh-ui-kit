import type { Meta, StoryObj } from '@storybook/react';
import { Card, ScrollContainer } from '../../lib/index';
// import React from 'react';


const meta = {
  title: 'Components/Layout/ScrollContainer',
  component: ScrollContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    height:"300px",
    children:<>
    <Card header='test1'/>
    <Card header='test1'/>
    <Card header='test1'/>
    <Card header='test1'/>
    <Card header='test1'/>
    <Card header='test1'/>
    </>
  },
} satisfies Meta<typeof ScrollContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
