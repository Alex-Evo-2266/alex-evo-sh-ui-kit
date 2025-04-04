import type { Meta, StoryObj } from '@storybook/react';
import { FullScrinTemplateDialog } from '../../lib/index';
// import React from 'react';

const meta = {
  title: 'Components/Dialogs/FullScrinTemplateDialog',
  component: FullScrinTemplateDialog,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { 
    children: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius officiis debitis aspernatur! Quasi quibusdam totam quisquam assumenda molestias, iure saepe et sed, veritatis nisi incidunt sint magnam, illo architecto earum.</p>  },
} satisfies Meta<typeof FullScrinTemplateDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    onHide: ()=>console.log("close"),
  },
};

export const Save: Story = {
    args: {
    onSave: ()=>console.log("save"),
    onHide: ()=>console.log("close"),
    },
  };
  
  export const Header: Story = {
    args: {
        header:"test H",
        onHide: ()=>console.log("close"),
    },
  };

  export const HeaderAndSave: Story = {
    args: {
        header:"test H",
        onSave: ()=>console.log("save"),
        onHide: ()=>console.log("close"),
    },
  };
  
  export const noHide: Story = {
    args: {
        header:"test H",
    },
  };
  
  export const saveOnly: Story = {
    args: {
        header:"test H",
        onSave: ()=>console.log("save"),
    },
  };
  