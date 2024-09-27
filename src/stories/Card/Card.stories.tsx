import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BaseActionCard, Button, Card, IconButton, ListContainer, ListItem } from '../../lib/index';
// import React from 'react';
import img from '../img/fon-base.jpg'

const meta = {
  title: 'Components/Card/Card',
  component: Card,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    header: "Test header",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut reiciendis debitis rem dolores officiis, quis, blanditiis odio minima nostrum necessitatibus eveniet nam perspiciatis ipsa voluptates ab tenetur error sunt?",
    subhead: "test"
},
};


export const Icon: Story = {
    args: {
      header: "Test header",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut reiciendis debitis rem dolores officiis, quis, blanditiis odio minima nostrum necessitatibus eveniet nam perspiciatis ipsa voluptates ab tenetur error sunt?",
      subhead: "test",
      imgSrc: img,
      alt: "img"
  },
  };

  export const IconAlt: Story = {
    args: {
      header: "Test header",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut reiciendis debitis rem dolores officiis, quis, blanditiis odio minima nostrum necessitatibus eveniet nam perspiciatis ipsa voluptates ab tenetur error sunt?",
      subhead: "test",
      alt: "img",
      imgSrc: "dfbg"
  },
  };
  
  
  export const IconAction: Story = {
    args: {
      header: "Test header",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut reiciendis debitis rem dolores officiis, quis, blanditiis odio minima nostrum necessitatibus eveniet nam perspiciatis ipsa voluptates ab tenetur error sunt?",
      subhead: "test",
      imgSrc: img,
      action: <><Button>btn</Button></>
  },
  };

  export const IconAndBaseActionCard: Story = {
    args: {
      header: "Test header",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut reiciendis debitis rem dolores officiis, quis, blanditiis odio minima nostrum necessitatibus eveniet nam perspiciatis ipsa voluptates ab tenetur error sunt?",
      subhead: "test",
      imgSrc: img,
      action: <BaseActionCard>
        <Button>btn1</Button>
        <Button>btn2</Button>
      </BaseActionCard>
  },
  };

  export const Children: Story = {
    args: {
      header: "Test header",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut reiciendis debitis rem dolores officiis, quis, blanditiis odio minima nostrum necessitatibus eveniet nam perspiciatis ipsa voluptates ab tenetur error sunt?",
      subhead: "test",
      imgSrc: img,
      children: <ListContainer transparent>
        <ListItem hovered header='test' text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut reiciendis debitis rem dolores officiis, quis, blanditiis odio minima nostrum necessitatibus eveniet nam perspiciatis ipsa voluptates ab tenetur error sunt?"/>
      </ListContainer>
  },
  };

  export const iconBtn: Story = {
    args: {
      header: "Test header",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut reiciendis debitis rem dolores officiis, quis, blanditiis odio minima nostrum necessitatibus eveniet nam perspiciatis ipsa voluptates ab tenetur error sunt?",
      subhead: "test",
      iconButtonCell:<IconButton icon={<i>+</i>}/>
  },
  };

  export const iconBtnAndImg: Story = {
    args: {
      header: "Test header",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut reiciendis debitis rem dolores officiis, quis, blanditiis odio minima nostrum necessitatibus eveniet nam perspiciatis ipsa voluptates ab tenetur error sunt?",
      subhead: "test",
      imgSrc: img,
      iconButtonCell:<IconButton icon={<i>+</i>}/>
  },
  };

  export const Click: Story = {
    args: {
      header: "Test header",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut reiciendis debitis rem dolores officiis, quis, blanditiis odio minima nostrum necessitatibus eveniet nam perspiciatis ipsa voluptates ab tenetur error sunt?",
      subhead: "test",
      imgSrc: img,
      alt: "img",
      onClick: fn,
      children: <ListContainer transparent>
      <ListItem hovered header='test' text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut reiciendis debitis rem dolores officiis, quis, blanditiis odio minima nostrum necessitatibus eveniet nam perspiciatis ipsa voluptates ab tenetur error sunt?"/>
    </ListContainer>
  },
  };