import type { Meta, StoryObj } from '@storybook/react';
import { BaseActionCard, Button } from '../../lib/index';

const meta = {
  title: 'Components/Layout/BaseActionCard',
  component: BaseActionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {},
} satisfies Meta<typeof BaseActionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   children: <>
    <Button>btn1</Button>
    <Button>btn2</Button>
   </>
  },
};
