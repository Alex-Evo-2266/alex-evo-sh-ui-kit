import type { Meta, StoryObj } from '@storybook/react';
import { BasicTemplateDialog, Button, BaseActionCard } from '../lib/index';
// import React from 'react';

const meta = {
  title: 'Components/Dialogs/BasicTemplateDialog',
  component: BasicTemplateDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    onHide: ()=>console.log("close")
  },
} satisfies Meta<typeof BasicTemplateDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children:<>
    <p>test</p>
    </>,
  },
};


export const Header: Story = {
    args: {
        header:"test H",
        children:<>
        <p>test</p>
        </>
    },
  };

  export const Action: Story = {
    args: {
        children:<>
        <p>test</p>
        </>,
        action: <BaseActionCard>
                    <Button>test btn</Button>
                </BaseActionCard>
    },
  };