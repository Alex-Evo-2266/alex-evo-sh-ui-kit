import type { Meta, StoryObj } from '@storybook/react';
import { Home, Menu } from '../../lib/index';


const meta = {
  title: 'Components/Menu/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    x: 1,
    y: 1,
    visible: true,
    blocks:[
        {
            items:[
                {
                    title: "test1"
                },
                {
                    title: "test2",
                    activated: true
                },
                {
                    title: "test3",
                    icon: <Home/>
                },
                {
                    title: "test4",
                    icon: <Home/>,
                    subItems: [{
                        title: "subtest1"
                    },
                    {
                        title: "subtest2",
                        icon: <Home/>,
                        activated: true
                    }]
                },
            ]
        },
        {
            items:[
                {
                    title: "test1"
                },
                {
                    title: "test2",
                    activated: true
                },
                {
                    title: "test3",
                    icon: <Home/>
                },
                {
                    title: "test4",
                    icon: <Home/>,
                    subItems: [{
                        title: "subtest1"
                    },
                    {
                        title: "subtest2",
                        icon: <Home/>,
                        activated: true
                    }]
                },
            ]
        }
    ]
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
