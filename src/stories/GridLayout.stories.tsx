import type { Meta, StoryObj } from '@storybook/react';
import { GridLayout, GridLayoutItem, Card } from '../lib/index';
// import React from 'react';

const meta = {
  title: 'Components/Layout/GridLayout',
  component: GridLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    itemWith: "300px",
    children:<>
    <GridLayoutItem><Card header='test1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit quibusdam rem perspiciatis assumenda doloremque expedita dicta maiores, repudiandae similique, minima ex impedit molestias cupiditate fugit quam recusandae quo beatae.'/></GridLayoutItem>
    <GridLayoutItem><Card header='test1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit quibusdam rem perspiciatis assumenda doloremque expedita dicta maiores, repudiandae similique, minima ex impedit molestias cupiditate fugit quam recusandae quo beatae.'/></GridLayoutItem>
    <GridLayoutItem><Card header='test1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit quibusdam rem perspiciatis assumenda doloremque expedita dicta maiores, repudiandae similique, minima ex impedit molestias cupiditate fugit quam recusandae quo beatae.'/></GridLayoutItem>
    <GridLayoutItem><Card header='test1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit quibusdam rem perspiciatis assumenda doloremque expedita dicta maiores, repudiandae similique, minima ex impedit molestias cupiditate fugit quam recusandae quo beatae.'/></GridLayoutItem>
    <GridLayoutItem><Card header='test1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit quibusdam rem perspiciatis assumenda doloremque expedita dicta maiores, repudiandae similique, minima ex impedit molestias cupiditate fugit quam recusandae quo beatae.'/></GridLayoutItem>
    </>
  },
} satisfies Meta<typeof GridLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const W800: Story = {
  args: {
    minWith: "800px",
  },
};


export const W1000: Story = {
    args: {
      minWith: "1000px",
    },
  };

  
  export const W500: Story = {
    args: {
      minWith: "500px",
    },
  };
  