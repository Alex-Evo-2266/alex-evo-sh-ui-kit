import { Meta, StoryObj } from '@storybook/react';
import { BigContainer, IPoint } from '../../lib';

const meta: Meta<typeof BigContainer> = {
  title: 'Components/Layout/BigContainer',
  component: BigContainer,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Additional CSS class name',
      control: 'text',
    },
    height: {
      description: 'Height of the container',
      defaultValue: '100%',
      control: 'text',
    },
    width: {
      description: 'Width of the container',
      defaultValue: '100%',
      control: 'text',
    },
    pozMove: {
      description: 'Initial position of the content (x, y coordinates)',
      control: 'object',
    },
    draggable: {
      description: 'Whether the content can be dragged with middle mouse button',
      defaultValue: true,
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BigContainer>;

/**
 * Default BigContainer with basic content
 */
export const Default: Story = {
  args: {
    children: <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>Drag me with middle mouse button!</div>,
    height: '300px',
    width: '500px',
  },
};

/**
 * BigContainer with initial position set
 */
export const WithInitialPosition: Story = {
  args: {
    ...Default.args,
    pozMove: { x: 50, y: 50 } as IPoint,
  },
};

/**
 * Non-draggable BigContainer
 */
export const NonDraggable: Story = {
  args: {
    ...Default.args,
    draggable: false,
  },
};

/**
 * BigContainer with custom dimensions
 */
export const CustomDimensions: Story = {
  args: {
    ...Default.args,
    height: '400px',
    width: '800px',
  },
};