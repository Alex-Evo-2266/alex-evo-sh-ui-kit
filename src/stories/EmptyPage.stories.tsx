import type { Meta, StoryObj } from '@storybook/react';
import { EmptyPage } from '../lib/index';
import { fn } from '@storybook/test';


const meta = {
  title: 'Pages/EmptyPage',
  component: EmptyPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {
    title: "Empty page"
  },
} satisfies Meta<typeof EmptyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};

export const Red: Story = {
    args: {
      hexBackground: "#FF0000"
    },
  };

export const Text: Story = {
    args: {
        hexBackground: "#B1B1B1",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestias iusto sint velit doloribus ullam reprehenderit ipsa. Illum quae quas consequuntur adipisci dignissimos harum! Maiores officiis reiciendis eius animi doloribus.'
    },
  };
  
  export const Button: Story = {
    args: {
        hexBackground: "#B1B1B1",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestias iusto sint velit doloribus ullam reprehenderit ipsa. Illum quae quas consequuntur adipisci dignissimos harum! Maiores officiis reiciendis eius animi doloribus.',
        btn:{
            onClick:fn,
            text: "create"
        }
    },
  };
  