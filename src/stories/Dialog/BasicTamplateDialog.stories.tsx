import { Meta, StoryObj } from '@storybook/react';
import { BasicTemplateDialog, Button, SizeProvider } from '../../lib';

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
  render: (args) => (
    <SizeProvider>
      <div style={{ width: '300px', height: '500px', position: 'relative' }}>
        <BasicTemplateDialog {...args} />
      </div>
    </SizeProvider>
  ),
  args: {
    header: 'Адаптивный диалог',
    children: (
      <div style={{ minHeight: '100px' }}>
        <p>На десктопе это модальное окно, на мобильных - bottom sheet</p>
      </div>
    )
  }
};

export const ForcedBottomSheet: Story = {
  render: (args) => (
    <SizeProvider>
      <div style={{ width: '300px', height: '500px', position: 'relative' }}>
        <BasicTemplateDialog {...args} />
      </div>
    </SizeProvider>
  ),
  args: {
    header: 'Bottom Sheet',
    forceBottomSheet: true,
    children: (
      <p>Всегда отображается как bottom sheet</p>
    ),
    action: <Button>OK</Button>
  }
};

export const ForcedModal: Story = {
  render: (args) => (
    <SizeProvider>
      <div style={{ width: '300px', height: '500px', position: 'relative' }}>
        <BasicTemplateDialog {...args} />
      </div>
    </SizeProvider>
  ),
  args: {
    header: 'Модальное окно',
    forceModal: true,
    children: (
      <p>Всегда отображается как модальное окно</p>
    ),
    action: <Button>OK</Button>
  }
};

export const WithScroll: Story = {
  render: (args) => (
    <SizeProvider>
      <div style={{ width: '300px', height: '500px', position: 'relative' }}>
        <BasicTemplateDialog {...args} />
      </div>
    </SizeProvider>
  ),
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
