import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SelectionDialog } from '../../lib';

const meta: Meta<typeof SelectionDialog> = {
  title: 'Components/Dialogs/SelectionDialog',
  component: SelectionDialog,
  tags: ['autodocs'],
  argTypes: {
    onSuccess: { action: 'selected' },
    onHide: { action: 'closed' },
    noHide: {
      control: 'boolean',
      description: 'Не закрывать диалог после выбора'
    },
    confirmText: {
      control: 'text',
      description: 'Текст кнопки подтверждения'
    },
    cancelText: {
      control: 'text',
      description: 'Текст кнопки отмены'
    }
  },
};

export default meta;

type Story = StoryObj<typeof SelectionDialog>;

export const Basic: Story = {
  args: {
    header: 'Выберите язык',
    items: [
      { title: 'Русский', data: 'ru' },
      { title: 'Английский', data: 'en' },
      { title: 'Немецкий', data: 'de' }
    ],
    confirmText: 'Выбрать',
    cancelText: 'Отмена'
  }
};

export const WithDescriptions: Story = {
  args: {
    header: 'Выберите тариф',
    items: [
      { 
        title: 'Базовый', 
        description: '10$/мес - основные функции', 
        data: 'basic' 
      },
      { 
        title: 'Профессиональный', 
        description: '25$/мес - расширенные возможности', 
        data: 'pro' 
      },
      { 
        title: 'Премиум', 
        description: '50$/мес - полный функционал', 
        data: 'premium' 
      }
    ]
  }
};

export const WithDisabledItems: Story = {
  args: {
    header: 'Выберите способ доставки',
    items: [
      { title: 'Курьером', data: 'courier' },
      { title: 'Самовывоз', data: 'pickup' },
      { 
        title: 'Почта (временно недоступно)', 
        data: 'mail', 
        disabled: true 
      }
    ]
  }
};

export const PersistentDialog: Story = {
  args: {
    header: 'Выберите тему',
    noHide: true,
    items: [
      { title: 'Светлая', data: 'light' },
      { title: 'Темная', data: 'dark' },
      { title: 'Системная', data: 'system' }
    ],
    confirmText: 'Применить',
    cancelText: 'Закрыть'
  }
};