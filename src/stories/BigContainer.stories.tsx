import type { Meta, StoryObj } from '@storybook/react';
import { BigContainer, Button } from '../lib/index';
// import React from 'react';

const meta = {
  title: 'BaseComponents/BigContainer',
  component: BigContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {},
} satisfies Meta<typeof BigContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    width: "400px",
    height: "400px",
   children: <>
    <div><Button>btn1</Button></div>
    <div><Button>btn1</Button></div>
    <Button>btn1</Button>
    <Button>btn2</Button>
   </>
  },
};
