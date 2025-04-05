import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from '../../../lib/ui/input/ColorField/ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/Picker/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  argTypes: {
    beginColor: {
      control: 'color',
      description: 'Начальный цвет палитры',
    },
    defaultColor: {
      control: 'color',
      description: 'Цвет по умолчанию',
    },
    width: {
      control: 'text',
      description: 'Ширина палитры',
    },
    height: {
      control: 'text',
      description: 'Высота палитры',
    },
    onChange: {
      action: 'colorChanged',
      description: 'Callback при изменении цвета',
    },
    onAddColor: {
      action: 'colorAdded',
      description: 'Callback при добавлении цвета',
    },
    onHide: {
      action: 'closed',
      description: 'Callback при закрытии палитры',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

const Template: Story = {
  render: (args) => {
    const [userColors, setUserColors] = useState<string[]>(args.userColors ?? []);
    return (
      <ColorPicker
        {...args}
        onAddColor={(colors) => {
          setUserColors(colors);
          args.onAddColor?.(colors);
        }}
        userColors={userColors}
      />
    );
  },
};

/** Базовая палитра цветов */
export const Basic: Story = {
  ...Template,
};

/** Палитра с начальным цветом */
export const WithInitialColor: Story = {
  ...Template,
  args: {
    beginColor: '#FF9300',
  },
};

/** Палитра с цветом по умолчанию */
export const WithDefaultColor: Story = {
  ...Template,
  args: {
    defaultColor: '#0532FF',
  },
};

/** Палитра с пользовательскими цветами */
export const WithUserColors: Story = {
  ...Template,
  args: {
    userColors: ['#FF0000', '#00FF00', '#0000FF'],
  },
};
