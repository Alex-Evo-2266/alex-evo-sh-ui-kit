import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BasicTemplateDialog, Button } from '../../lib';

const meta: Meta<typeof BasicTemplateDialog> = {
  title: 'Components/Dialogs/BasicTemplateDialog',
  component: BasicTemplateDialog,
  tags: ['autodocs'],
  argTypes: {
    onHide: { action: 'closed' },
    marginBottom: {
      control: { type: 'number', min: 0, max: 200 },
      description: 'Отступ снизу для bottom sheet (только на мобильных)'
    },
    forceBottomSheet: {
      control: 'boolean',
      description: 'Принудительно использовать bottom sheet'
    },
    forceModal: {
      control: 'boolean',
      description: 'Принудительно использовать модальное окно'
    },
    disableBackplate: {
      control: 'boolean',
      description: 'Отключить полупрозрачный фон'
    }
  },
};

export default meta;

type Story = StoryObj<typeof BasicTemplateDialog>;

/**
 * Стандартное использование (адаптивное)
 */
export const Adaptive: Story = {
  args: {
    header: 'Адаптивный диалог',
    children: (
      <p>На десктопе это модальное окно, на мобильных - bottom sheet</p>
    ),
    action: (
      <>
        <Button styleType="text">Отмена</Button>
        <Button>Подтвердить</Button>
      </>
    )
  }
};

/**
 * Принудительный bottom sheet
 */
export const ForcedBottomSheet: Story = {
  args: {
    header: 'Bottom Sheet',
    forceBottomSheet: true,
    children: (
      <p>Всегда отображается как bottom sheet</p>
    ),
    action: <Button>OK</Button>
  }
};

/**
 * Принудительное модальное окно
 */
export const ForcedModal: Story = {
  args: {
    header: 'Модальное окно',
    forceModal: true,
    children: (
      <p>Всегда отображается как модальное окно</p>
    ),
    action: <Button>OK</Button>
  }
};

/**
 * Длинный контент со скроллом
 */
export const WithScroll: Story = {
  args: {
    header: 'Длинный контент',
    children: (
      <>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>Пункт {i + 1}</p>
        ))}
      </>
    ),
    action: <Button>Закрыть</Button>
  }
};