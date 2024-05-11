

import type { Meta, StoryObj } from '@storybook/react';
import { SelectionDialog} from '../lib/index';

const meta = {
  title: 'Components/Dialogs/SelectionDialog',
  component: SelectionDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    onHide: ()=>console.log("close"),
    header: "testH",
    items: [
    {
        title: "test1",
        data: "data1"
    },
    {
        title: "test2",
        data: "data2"
    },
    {
        title: "test3",
        data: "data3"
    },
    {
        title: "test3",
        data: "data3"
    },
    {
        title: "test3",
        data: "data3"
    },
    {
        title: "test3",
        data: "data3"
    },
    ]
  },
} satisfies Meta<typeof SelectionDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
