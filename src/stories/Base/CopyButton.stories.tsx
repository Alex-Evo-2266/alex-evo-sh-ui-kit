import type { Meta, StoryObj } from '@storybook/react';
import { CopyButton } from '../../lib';

const meta: Meta<typeof CopyButton> = {
  title: 'Components/Base/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    supportText: { control: 'boolean' },
    copiedTimeout: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: {
    text: 'Текст для копирования',
    supportText: true,
    copiedTimeout: 2000,
  },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Стандартный: Story = {};

export const БезТекста: Story = {
  args: {
    supportText: false,
  },
};

export const Отключенный: Story = {
  args: {
    disabled: true,
  },
};

export const ДлинныйТекст: Story = {
  args: {
    text: 'Это более длинный текст, который нужно скопировать в буфер обмена',
  },
};