

import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar} from '../../lib/index';

const meta = {
  title: 'Components/Other/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    visible: true,
    text: "asegdf sdfxngcszfd g cfasdf"
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};

export const Red: Story = {
  args: {
   option:{
    color: "#fff",
    backgroundColor: "red"
   }
  },
};

export const Btn: Story = {
  args: {
   option:{
    buttonText:"drgtf",
    onClick:()=>{}
   }
  },
};

export const Close: Story = {
  args: {
   option:{
    closeButton:true
   }
  },
};

export const CloseAndBtn: Story = {
  args: {
   option:{
    closeButton:true,
    buttonText:"drgtf",
    onClick:()=>{}
   }
  },
};