import type { Meta, StoryObj } from '@storybook/react';
import { ListContainer, ListItem } from '../lib/index';
// import React from 'react';

const meta = {
  title: 'Components/BaseComponents/ListContainer',
  component: ListContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { },
} satisfies Meta<typeof ListContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: <>
        <ListItem header='test' hovered text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas exercitationem soluta repellendus ipsum, ducimus inventore consequatur incidunt ea veniam iste aut adipisci sit, illo fuga quo voluptatibus eveniet natus!"/>
        <ListItem header='test' hovered/>
        <ListItem header='test' hovered/>
        <ListItem header='test' hovered/>
        <ListItem header='test' hovered/>
    </>,
  },
};
