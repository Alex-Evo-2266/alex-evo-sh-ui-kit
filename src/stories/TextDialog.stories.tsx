

import type { Meta, StoryObj } from '@storybook/react';
import { TextDialog} from '../lib/index';

const meta = {
  title: 'Dialogs/TextDialog',
  component: TextDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    onHide: ()=>console.log("close"),
    styleContainer: {
        minHeight: "200px",
        minWidth: "300px"
    },
    header: "testH",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde atque deleniti aut! Sapiente amet optio tenetur illo doloremque minus numquam quisquam, reprehenderit modi minima sunt eaque! Voluptates amet minima ad.",
  },
} satisfies Meta<typeof TextDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};


export const Placeholder: Story = {
    args: {
        placeholder:"test"
    },
  };
  