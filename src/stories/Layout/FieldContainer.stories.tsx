import type { Meta, StoryObj } from '@storybook/react';
import { FieldContainer, TextField } from '../../lib/index';
// import React from 'react';

const meta = {
  title: 'Components/Layout/FieldContainer',
  component: FieldContainer,
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
} satisfies Meta<typeof FieldContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
