import type { Meta, StoryObj } from '@storybook/react';
import { JsonContainer } from '../../lib/index';
import { fn } from '@storybook/test';
import { BaseType } from '../../lib/ui/Other/JSON/JsonComponent';

const meta = {
  title: 'Components/Other/JsonContainer',
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

export const Array: Story = {
  args: {
    baseType: BaseType.ARRAY
  },
};

export const Object: Story = {
  args: {
    baseType: BaseType.OBJECT
  },
};

export const ObjectString: Story = {
  args: {
    baseType: BaseType.OBJECT,
    onlyStringValue: true
  },
};
export const ArrayString: Story = {
  args: {
    baseType: BaseType.ARRAY,
    onlyStringValue: true
  },
};