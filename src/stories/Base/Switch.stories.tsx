import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../../lib';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
  title: 'Components/Base/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error'],
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    showLabel: {
      control: 'boolean',
    },
    onChange: {
      action: 'changed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {
    checked: false,
  },
};

export const WithLabels: Story = {
  args: {
    showLabel: true,
    labelOn: 'Вкл',
    labelOff: 'Выкл',
  },
};

export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Switch size="small" />
      <Switch size="medium" />
      <Switch size="large" />
    </div>
  ),
};

export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Switch variant="primary" />
      <Switch variant="secondary" />
      <Switch variant="error" />
    </div>
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Switch disabled />
      <Switch disabled checked />
    </div>
  ),
};

export const ControlledExample: StoryObj = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Switch 
          checked={checked}
          onChange={(e:any) => setChecked(e.target.checked)}
          showLabel
        />
        <div>Текущее состояние: {checked ? 'Вкл' : 'Выкл'}</div>
      </div>
    );
  },
};