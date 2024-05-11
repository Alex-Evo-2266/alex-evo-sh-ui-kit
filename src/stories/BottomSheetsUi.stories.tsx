import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheetsUi, ListContainer, ListItem } from '../lib/index';
// import React from 'react';


const meta = {
  title: 'Components/BaseComponents/BottomSheetsUi',
  component: BottomSheetsUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {},
} satisfies Meta<typeof BottomSheetsUi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   onHide: ()=>{},
   visible: true,
   children: <ListContainer transparent>
    <ListItem header='test' hovered/>
    <ListItem header='test' hovered/>
    <ListItem header='test' hovered/>
    <ListItem header='test' hovered/>
   </ListContainer>
  },
};
