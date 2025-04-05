import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ModalDialogTemplate } from '../../lib';

const meta: Meta<typeof ModalDialogTemplate> = {
  title: 'Components/Dialogs/ModalDialogTemplate',
  component: ModalDialogTemplate,
  tags: ['autodocs'],
  argTypes: {
    onHide: { action: 'closed' },
    maxWidth: {
      control: {
        type: 'select',
        options: [320, 480, 560, '100%']
      },
      description: 'Максимальная ширина диалога'
    },
    clearStyle: {
      control: 'boolean',
      description: 'Убирает стандартные стили контейнера'
    },
    disableBackplate: {
      control: 'boolean',
      description: 'Отключает полупрозрачный фон'
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Показывает кнопку закрытия в заголовке'
    }
  },
};

export default meta;

type Story = StoryObj<typeof ModalDialogTemplate>;

/**
 * Базовый диалог с заголовком и кнопками действий
 */
export const Basic: Story = {
  args: {
    header: 'Заголовок диалога',
    children: (
      <p>Это содержимое диалога. Здесь может быть любой React-компонент.</p>
    ),
    action: (
      <>
        <Button styleType="text">Отмена</Button>
        <Button>Подтвердить</Button>
      </>
    ),
    showCloseButton: true
  }
};

/**
 * Диалог без стандартных стилей для кастомной реализации
 */
export const Unstyled: Story = {
  args: {
    clearStyle: true,
    children: (
      <div style={{ padding: '24px', background: 'white', borderRadius: '8px' }}>
        <h3>Кастомное оформление</h3>
        <p>Этот диалог использует clearStyle для кастомных стилей</p>
      </div>
    )
  }
};

/**
 * Диалог с длинным содержимым и скроллом
 */
export const ScrollingContent: Story = {
  args: {
    header: 'Длинное содержимое',
    children: (
      <>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>Элемент содержимого {i + 1}</p>
        ))}
      </>
    ),
    action: (
      <Button>Закрыть</Button>
    )
  }
};

/**
 * Диалог с кастомной шириной
 */
export const CustomWidth: Story = {
  args: {
    header: 'Узкий диалог',
    maxWidth: 320,
    children: (
      <p>Этот диалог имеет максимальную ширину 320px.</p>
    )
  }
};

/**
 * Пример диалога подтверждения
 */
export const Confirmation: Story = {
  render: (args) => (
    <ModalDialogTemplate {...args}>
      <p>Вы уверены, что хотите удалить этот элемент?</p>
      <p style={{ color: 'var(--Error-color)' }}>Это действие нельзя отменить.</p>
    </ModalDialogTemplate>
  ),
  args: {
    header: 'Подтверждение удаления',
    action: (
      <>
        <Button styleType="text">Отмена</Button>
        <Button color="error">Удалить</Button>
      </>
    ),
    showCloseButton: true
  }
};