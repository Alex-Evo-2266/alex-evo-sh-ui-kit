import { Meta, StoryObj } from '@storybook/react';
import { FullScreenTemplateDialog } from '../../lib/ui/Dialog/TemplateDialog/FullScreenTemplateDialog';
import { SizeProvider } from '../../lib';

const meta: Meta<typeof FullScreenTemplateDialog> = {
  title: 'Components/Dialogs/FullScreenTemplateDialog',
  component: FullScreenTemplateDialog,
  tags: ['autodocs'],
  argTypes: {
    onHide: { action: 'closed' },
    onSave: { action: 'saved' },
    marginBottom: {
      control: { type: 'number', min: 0, max: 200 },
      description: 'Отступ снизу для контента'
    },
    disableBackplate: {
      control: 'boolean',
      description: 'Отключить полупрозрачный фон'
    },
    saveText: {
      control: 'text',
      description: 'Текст кнопки сохранения'
    },
    cancelText: {
      control: 'text',
      description: 'Текст кнопки отмены'
    }
  },
};

export default meta;

type Story = StoryObj<typeof FullScreenTemplateDialog>;

export const Basic: Story = {
  args: {
    header: 'Редактирование профиля',
    children: (
      <div style={{ minHeight: '400px' }}>
        <p>Форма редактирования содержимого</p>
      </div>
    ),
    saveText: 'Сохранить',
    cancelText: 'Отмена'
  }
};

export const WithoutHeader: Story = {
  args: {
    children: (
      <div style={{ minHeight: '400px' }}>
        <p>Диалог без заголовка</p>
      </div>
    )
  }
};

export const WithCustomBreakpoint: Story = {
  args: {
    header: 'Кастомный breakpoint',
    children: (
      <div style={{ minHeight: '400px' }}>
        <p>Переключается в полноэкранный режим на ширине меньше 1024px</p>
      </div>
    )
  }
};

export const ForcedFullScreen: Story = {
  render: (args) => (
    <SizeProvider>
      <div style={{ width: '300px', height: '500px', position: 'relative' }}>
        <FullScreenTemplateDialog {...args} />
      </div>
    </SizeProvider>
  ),
  args: {
    header: 'Принудительный полноэкранный',
    children: (
      <div style={{ minHeight: '300px' }}>
        <p>Всегда отображается в полноэкранном режиме</p>
      </div>
    )
  }
};