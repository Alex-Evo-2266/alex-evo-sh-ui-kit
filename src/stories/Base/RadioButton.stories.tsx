import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '../../lib';
import { useState } from 'react';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/Base/RadioButton',
  component: RadioButton,
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
    showLabel: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onChange: {
      action: 'changed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Primary: Story = {
  args: {
    name: 'group1',
    label: 'Option 1',
    value: 'option1',
  },
};

export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <RadioButton name="size" label="Small" size="small" value="small" />
      <RadioButton name="size" label="Medium" size="medium" value="medium" />
      <RadioButton name="size" label="Large" size="large" value="large" />
    </div>
  ),
};

export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <RadioButton name="variant" label="Primary" variant="primary" value="primary" />
      <RadioButton name="variant" label="Secondary" variant="secondary" value="secondary" />
      <RadioButton name="variant" label="Error" variant="error" value="error" />
    </div>
  ),
};

export const WithoutLabel: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <RadioButton name="no-label" value="1" aria-label="Option 1" showLabel={false} />
      <RadioButton name="no-label" value="2" aria-label="Option 2" showLabel={false} />
    </div>
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <RadioButton name="disabled" label="Disabled" value="1" disabled />
      <RadioButton name="disabled" label="Disabled checked" value="2" disabled checked />
    </div>
  ),
};

export const ControlledExample: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState('option1');
    
    return (
      <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
        <RadioButton 
          name="controlled" 
          label="Option 1" 
          value="option1" 
          currentValue={selected}
          onChange={(e:any) => setSelected(e.target.value)}
        />
        <RadioButton 
          name="controlled" 
          label="Option 2" 
          value="option2" 
          currentValue={selected}
          onChange={(e:any) => setSelected(e.target.value)}
        />
        <RadioButton 
          name="controlled" 
          label="Option 3" 
          value="option3" 
          currentValue={selected}
          onChange={(e:any) => setSelected(e.target.value)}
        />
      </div>
    );
  },
};