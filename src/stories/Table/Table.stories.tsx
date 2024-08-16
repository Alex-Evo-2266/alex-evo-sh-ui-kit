import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Table } from '../../lib/index';
import { Home } from 'lucide-react';
// import React from 'react';


const meta = {
  title: 'Components/Table/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { 
    columns:[{
        field: "test1",
        title: "hello"
    },
    {
        field: "test2",
        title: "test2"
    },
    {
        field: "test3",
        title: "test3"
    }],
    data:[
        {
            test1: 54,
            test2: "dfgh",
            test3: "67"
        },
        {
            test1: 54,
            test2: "tere",
            test3: "67"
        },
        {
            test1: 54,
            test2: "tere",
            test3: ["tere", "dsvfg"]
        }
    ]
   },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};

export const Action: Story = {
    args: {
        actions:[
            {
                icon: <Home/>,
                onClick: fn,
            }
        ]
    },
  };

  export const Delete: Story = {
    args: {
        onDelete:fn
    },
  };

  export const Menu: Story = {
    args: {
        onContextMenu:fn
    },
  };

  export const Combo: Story = {
    args: {
        onContextMenu:fn,
        onDelete: fn,
        onEdit: fn
    },
  };