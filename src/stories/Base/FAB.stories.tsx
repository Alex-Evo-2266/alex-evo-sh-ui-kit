import type { Meta, StoryObj } from '@storybook/react';
import { FAB, Home, Pen, Plus } from '../../lib';
import { useState } from 'react';

const meta: Meta<typeof FAB> = {
  title: 'Components/Base/FAB',
  component: FAB,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'surface'],
    },
    position: {
      control: { type: 'select' },
      options: ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'none'],
    },
    icon: {
      control: false,
    },
    children: {
      control: 'text',
    },
    onClick: {
      action: 'clicked',
    },
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: 'var(--Surface-color)' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FAB>;

// Базовые FAB
export const Primary: Story = {
  args: {
    icon: <Plus />,
    'aria-label': 'Добавить',
  },
};

export const Secondary: Story = {
  args: {
    icon: <Plus />,
    variant: 'secondary',
    'aria-label': 'Добавить',
  },
};

// Extended FAB
export const Extended: Story = {
  args: {
    icon: <Plus />,
    children: 'Создать',
  },
};

// Разные размеры
export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <FAB icon={<Plus />} size="small" aria-label="Маленькая" position='bottom-left' />
      <FAB icon={<Plus />} size="medium" aria-label="Средняя" position='top-left'/>
      <FAB icon={<Plus />} size="large" aria-label="Большая" />
    </div>
  ),
};

// Разные варианты
export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <FAB icon={<Plus />} variant="primary" aria-label="Основная" position='bottom-left'/>
      <FAB icon={<Plus />} variant="secondary" aria-label="Вторичная" position='bottom-right' />
      <FAB icon={<Plus />} variant="tertiary" aria-label="Третичная" position='top-left' />
      <FAB icon={<Plus />} variant="surface" aria-label="Поверхность" position='top-right' />
    </div>
  ),
};

// Разные иконки
export const DifferentIcons: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <FAB icon={<Plus />} aria-label="Добавить" />
      <FAB icon={<Pen />} aria-label="Редактировать" />
      <FAB icon={<Home />} aria-label="Поделиться" />
    </div>
  ),
};

// Позиционирование
export const Positioning: StoryObj = {
  render: () => (
    <div style={{ height: '300px', position: 'relative', border: '1px dashed #ccc' }}>
      <FAB icon={<Plus />} position="top-left" aria-label="Сверху слева" />
      <FAB icon={<Plus />} position="top-right" aria-label="Сверху справа" />
      <FAB icon={<Plus />} position="bottom-left" aria-label="Снизу слева" />
      <FAB icon={<Plus />} position="bottom-right" aria-label="Снизу справа" />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Интерактивный пример
export const InteractiveExample: StoryObj = {
  render: () => {
    const [active, setActive] = useState(false);
    
    return (
      <FAB 
        icon={active ? <Plus /> : <Pen />}
        onClick={() => setActive(!active)}
        aria-label={active ? "Добавить" : "Редактировать"}
      />
    );
  },
};