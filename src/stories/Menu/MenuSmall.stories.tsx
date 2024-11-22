import type { Meta, StoryObj } from '@storybook/react';
import { Home, SmallWindowMenu } from '../../lib/index';


const meta = {
  title: 'Components/Menu/SmallWindowMenu',
  component: SmallWindowMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    visible:true,
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
} satisfies Meta<typeof SmallWindowMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
