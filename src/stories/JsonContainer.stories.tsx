import type { Meta, StoryObj } from '@storybook/react';
import { JsonContainer } from '../lib/index';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/BaseComponents/JsonContainer',
  component: JsonContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    onChange: fn,
    name:"test",
    data: {
      tesr: "df",
      sdfb: [{
        sdfg: "fsd"
      }]
    }
   },
} satisfies Meta<typeof JsonContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};


export const Json: Story = {
  args: {
    readonly: true
  },
};
