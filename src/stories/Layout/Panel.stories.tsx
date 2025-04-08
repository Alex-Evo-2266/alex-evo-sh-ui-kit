import { Meta, StoryObj } from '@storybook/react';
import { Panel } from '../../lib';

const meta: Meta<typeof Panel> = {
  title: 'Components/Layout/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
    },
    borderRadius: {
      control: { type: 'number', min: 0, max: 50, step: 1 },
    },
    padded: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  args: {
    children: 'This is a default panel',
    elevation: 1,
    padded: true,
    borderRadius: 12,
  },
};

export const HighElevation: Story = {
  args: {
    ...Default.args,
    elevation: 8,
    children: 'Panel with high elevation',
  },
};

export const NoPadding: Story = {
  args: {
    ...Default.args,
    padded: false,
    children: 'Panel without padding',
  },
};

export const CustomBorderRadius: Story = {
  args: {
    ...Default.args,
    borderRadius: 24,
    children: 'Panel with custom border radius',
  },
};

export const WithCustomStyles: Story = {
  args: {
    ...Default.args,
    style: { backgroundColor: '#f0f8ff', border: '1px solid #4682b4' },
    children: 'Panel with custom styles',
  },
};

export const WithComplexContent: Story = {
  args: {
    ...Default.args,
    children: (
      <div>
        <h3>Panel Title</h3>
        <p>This panel contains more complex content including:</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    ),
  },
};