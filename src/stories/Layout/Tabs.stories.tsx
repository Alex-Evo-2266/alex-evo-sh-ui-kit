import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../../lib/index';
// import React from 'react';


const meta = {
  title: 'Components/Layout/Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscrin',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    tabs: [
        { label: 'Вкладка 1', content: <div>Это содержимое первой вкладки.</div> },
        { label: 'Вкладка 2', content: <div>А это содержимое второй вкладки.</div> },
        { label: 'Вкладка 3', content: <div>И это третьей вкладки.</div> },
      ]
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
