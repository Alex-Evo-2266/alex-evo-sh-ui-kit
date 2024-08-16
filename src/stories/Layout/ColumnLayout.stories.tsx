import type { Meta, StoryObj } from '@storybook/react';
import { ColumnLayout, Card } from '../../lib/index';

const meta = {
  title: 'Components/Layout/ColumnLayout',
  component: ColumnLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    countColumn: 5,
    items:[]
  },
} satisfies Meta<typeof ColumnLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    items:[
      {
        indexCol: 2,
        node: <Card header='fsgd'/>
      },
      {
        indexCol: 2,
        node: <Card header='fsgd'/>
      },
      {
        indexCol: 4,
        node: <Card header='fsgd'/>
      }
    ]
  },
};
