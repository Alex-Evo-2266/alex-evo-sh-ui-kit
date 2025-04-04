

import type { Meta, StoryObj } from '@storybook/react';
import { Chips } from '../../lib/index';
import { useState } from 'react';

const meta: Meta<typeof Chips> = {
  title: 'Components/Base/Chips',
  component: Chips,
  tags: ['autodocs'],
  args:{
    onClick: undefined,
    onDelete: undefined
  },
  argTypes: {
    big: { control: 'boolean' },
    onClick: { action: 'clicked' },
    onDelete: { action: 'deleted' },
  },
};

export default meta;
type Story = StoryObj<typeof Chips>;

export const Basic: Story = {
  args: {
    text: 'Basic Chip',
  },
};

export const Clickable: Story = {
  args: {
    text: 'Clickable Chip',
    onClick: () => console.log('Chip clicked'),
  },
};

export const Deletable: Story = {
  args: {
    text: 'Deletable Chip',
    onDelete: () => console.log('Chip deleted'),
  },
};

export const BigSize: Story = {
  args: {
    text: 'Big Chip',
    big: true,
  },
};

export const InteractiveExample = () => {
  const [chips, setChips] = useState(['React', 'TypeScript', 'Storybook']);
  
  const handleDelete = (index: number) => {
    setChips(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {chips.map((chip, index) => (
        <Chips
          key={chip}
          text={chip}
          onDelete={() => handleDelete(index)}
          onClick={() => console.log(`Clicked ${chip}`)}
        />
      ))}
    </div>
  );
};