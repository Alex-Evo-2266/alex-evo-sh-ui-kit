import type { Meta, StoryObj } from '@storybook/react';
import { Button, Panel } from '../../lib/index';

const meta = {
  title: 'Components/Layout/Panel',
  component: Panel,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   children:
   <div>
    <p>sgreg sgsr hsh eh s sheher eh se er</p>
    <Button>test</Button>
   </div>
},
};

