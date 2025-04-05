import { Meta, StoryObj } from '@storybook/react';
import { TextDialog } from '../../lib';

const meta: Meta<typeof TextDialog> = {
  title: 'Components/Dialogs/TextDialog',
  component: TextDialog,
  tags: ['autodocs'],
  argTypes: {
    onSuccess: { action: 'submitted' },
    onHide: { action: 'closed' },
    type: {
      control: 'select',
      options: ['text', 'number', 'password', 'email']
    },
    min: {
      control: { type: 'number', min: 0 }
    },
    max: {
      control: { type: 'number', min: 1 }
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextDialog>;

/**
 * Стандартный текстовый диалог
 */
export const Default: Story = {
  args: {
    header: 'Введите текст',
    text: 'Пожалуйста, введите ваш текст:',
    placeholder: 'Введите что-нибудь...'
  }
};

/**
 * Числовой ввод с ограничениями
 */
export const NumberInput: Story = {
  args: {
    header: 'Введите возраст',
    text: 'Пожалуйста, введите ваш возраст:',
    type: 'number',
    min: 1,
    max: 120,
    placeholder: 'От 1 до 120'
  }
};

/**
 * С кастомной валидацией
 */
export const WithValidation: Story = {
  args: {
    header: 'Введите email',
    text: 'Пожалуйста, введите корректный email:',
    type: 'email',
    placeholder: 'user@example.com',
    validate: (value:any) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }
};

/**
 * С предустановленным значением
 */
export const WithDefaultValue: Story = {
  args: {
    header: 'Редактирование',
    text: 'Отредактируйте текст:',
    defaultValue: 'Предустановленное значение',
    confirmText: 'Сохранить',
    cancelText: 'Закрыть'
  }
};