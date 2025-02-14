import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CopyButton } from '../../lib/ui/Base/CopyButton/CopyButton';
// import React from 'react';

const meta = {
  title: 'Components/Base/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { onClick: fn(), text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda tempore corporis, optio ullam harum iste? Eum sequi rem odio expedita culpa accusamus architecto vitae, laborum obcaecati beatae odit totam." },
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};


export const BaseTransparent: Story = {
    args: {
      transparent: true
    },
  };

  export const SWG: Story = {
    args: {
    },
  };