import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ColorField, getTextColor } from '../../lib';

const meta: Meta<typeof ColorField> = {
  title: 'Components/Input/ColorField',
  component: ColorField,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'color',
      description: 'Current color value in hex format'
    },
    onChange: {
      action: 'colorChanged',
      description: 'Callback when color changes'
    },
    border: {
      control: 'boolean',
      description: 'Whether to show border around the field'
    },
    transparent: {
      control: 'boolean',
      description: 'Whether the field background should be transparent'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no color is selected'
    },
    defaultColor: {
      control: 'color',
      description: 'Default color to show in picker'
    },
    userColors: {
      control: 'object',
      description: 'Array of user-defined colors to show in picker'
    },
    onAddColor: {
      action: 'colorAdded',
      description: 'Callback when user adds a new color'
    },
    container: {
      table: {
        disable: true
      }
    }
  },
  args:{
    container: document.body
  }
};

export default meta;

type Story = StoryObj<typeof ColorField>;

export const Basic: Story = {
  args: {
    value: '#3a86ff',
    placeholder: 'Select a color'
  }
};

export const WithBorder: Story = {
  args: {
    ...Basic.args,
    border: true
  }
};

export const Transparent: Story = {
  args: {
    ...Basic.args,
    transparent: true
  }
};

export const WithCustomPalette: Story = {
  args: {
    ...Basic.args,
    userColors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
  }
};

export const InteractiveExample: Story = {
  render: (args) => {
    const [color, setColor] = useState('#3a86ff');
    return (
      <div style={{ padding: '20px' }}>
        <ColorField 
          {...args} 
          value={color} 
          onChange={setColor} 
        />
        <div 
          style={{
            marginTop: '20px',
            padding: '20px',
            backgroundColor: color,
            color: getTextColor(color),
            textAlign: 'center',
            borderRadius: '4px'
          }}
        >
          Selected color: {color}
        </div>
      </div>
    );
  },
  args: {
    ...Basic.args
  }
};

export const WithDefaultColor: Story = {
  args: {
    ...Basic.args,
    value: undefined,
    defaultColor: '#ff0000'
  }
};

export const WithColorHistory: Story = {
  args: {
    ...Basic.args,
    userColors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'],
    onAddColor: (colors) => console.log('New colors:', colors)
  }
};