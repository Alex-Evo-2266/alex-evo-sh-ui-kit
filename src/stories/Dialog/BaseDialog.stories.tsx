import { Meta, StoryObj } from '@storybook/react';
import { BaseDialog, Button } from '../../lib';

const meta: Meta<typeof BaseDialog> = {
  title: 'Components/Dialogs/BaseDialog',
  component: BaseDialog,
  tags: ['autodocs'],
  argTypes: {
    onSuccess: { action: 'confirmed' },
    onCancel: { action: 'cancelled' },
    onHide: { action: 'closed' },
    actionText: {
      control: 'text',
      description: 'Текст кнопки подтверждения'
    },
    cancelText: {
      control: 'text',
      description: 'Текст кнопки отмены'
    },
    disableDefaultButtons: {
      control: 'boolean',
      description: 'Отключить стандартные кнопки'
    }
  },
};

export default meta;

type Story = StoryObj<typeof BaseDialog>;

/**
 * Стандартный диалог подтверждения
 */
export const Confirmation: Story = {
  args: {
    header: 'Подтверждение действия',
    text: 'Вы уверены, что хотите выполнить это действие?',
    actionText: 'Подтвердить',
    cancelText: 'Отмена'
  }
};

/**
 * Диалог с кастомными кнопками
 */
export const WithCustomActions: Story = {
  args: {
    header: 'Кастомные действия',
    text: 'Выберите вариант действия:',
    disableDefaultButtons: true,
    customActions: (
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button styleType='outline'>Вариант 1</Button>
        <Button styleType="outline">Вариант 2</Button>
        <Button>Основное</Button>
      </div>
    )
  }
};

/**
 * Диалог с кастомным контентом
 */
export const WithCustomContent: Story = {
  args: {
    header: 'Сложный контент',
    children: (
      <div>
        <h4>Информационное сообщение</h4>
        <p>Этот диалог содержит более сложную разметку</p>
        <ul>
          <li>Пункт 1</li>
          <li>Пункт 2</li>
          <li>Пункт 3</li>
        </ul>
      </div>
    )
  }
};

/**
 * Только с кнопкой OK
 */
export const Alert: Story = {
  args: {
    header: 'Уведомление',
    text: 'Операция выполнена успешно!',
    cancelText: undefined,
    actionText: 'OK'
  }
};