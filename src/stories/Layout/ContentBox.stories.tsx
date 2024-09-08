import type { Meta, StoryObj } from '@storybook/react';
import { ContentBox, TextField } from '../../lib/index';
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
    header: "test H",
    children: <>
    <TextField placeholder='test'  border styleContainer={{minWidth: "300px"}}/>
    <TextField placeholder='test'  border styleContainer={{minWidth: "300px"}}/>
    <TextField placeholder='test'  border styleContainer={{minWidth: "300px"}}/>
    </>
  },
} satisfies Meta<typeof ContentBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
