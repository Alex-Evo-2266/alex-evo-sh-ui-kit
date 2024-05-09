import type { Meta, StoryObj } from '@storybook/react';
import { BaseActionCard, Button } from '../lib/index';
// import React from 'react';

const meta = {
  title: 'BaseComponents/BaseActionCard',
  component: BaseActionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {},
} satisfies Meta<typeof BaseActionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   children: <>
    <Button>btn1</Button>
    <Button>btn2</Button>
   </>
  },
};
