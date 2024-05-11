import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {ListItem, IconButton } from '../lib/index';
// import React from 'react';


const meta = {
  title: 'Components/BaseComponents/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { onClick: fn },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    hovered: true,
    header: "test header",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et, neque quia reiciendis sapiente nam! Ratione at harum tempora aut amet enim consequuntur voluptatum libero, perspiciatis sed recusandae? Minus, dolorem?"
  },
};


export const Value: Story = {
    args: {
      hovered: true,
      value: "100",
      header: "test header",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et, neque quia reiciendis sapiente nam! Ratione at harum tempora aut amet enim consequuntur voluptatum libero, perspiciatis sed recusandae? Minus, dolorem?"
    },
  };
  
  export const Icon: Story = {
    args: {
      hovered: true,
      icon: <i>+</i>,
      header: "test header",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et, neque quia reiciendis sapiente nam! Ratione at harum tempora aut amet enim consequuntur voluptatum libero, perspiciatis sed recusandae? Minus, dolorem?"
    },
  };
  

  export const Control: Story = {
    args: {
      hovered: true,
      control: <>
      <IconButton transparent icon={<i>+</i>}/>
      </>,
      header: "test header",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et, neque quia reiciendis sapiente nam! Ratione at harum tempora aut amet enim consequuntur voluptatum libero, perspiciatis sed recusandae? Minus, dolorem?"
    },
  };

  export const ControlAndIcon: Story = {
    args: {
      icon: <i>+</i>,
      control: <>
      <IconButton transparent icon={<i>+</i>}/>
      </>,
      header: "test header",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et, neque quia reiciendis sapiente nam! Ratione at harum tempora aut amet enim consequuntur voluptatum libero, perspiciatis sed recusandae? Minus, dolorem?"
    },
  };