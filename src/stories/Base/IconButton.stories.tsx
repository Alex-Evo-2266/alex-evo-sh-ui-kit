import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { IconButton } from '../../lib/index';
import trash from '../../icons/trash-blank-alt-svgrepo-com.svg'
// import React from 'react';

const meta = {
  title: 'Components/Base/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    icon: <i>+</i>
  },
};


export const BaseTransparent: Story = {
    args: {
      icon: <i>+</i>,
      transparent: true
    },
  };

  export const SWG: Story = {
    args: {
      icon: <img src={trash}/>,
    },
  };