import type { Meta, StoryObj } from '@storybook/react';
import { GearIcon, IconButton } from '../../lib';
import { Copy, Check,  } from '../../lib'; // Предполагаемые пути к иконкам
import { useState } from 'react';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Base/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false, // Отключаем контроль в Storybook, так как это React-нода
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    transparent: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    onClick: {
      action: 'clicked',
    },
    className: {
      control: 'text',
    },
    classNameContainer: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'centered',
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
            selector: '.iconbutton:not(:disabled)',
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// Базовая история
export const Default: Story = {
  args: {
    icon: <Copy />,
    'aria-label': 'Копировать',
  },
};

// Разные размеры
export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton icon={<Copy />} size="small" aria-label="Копировать маленькая" />
      <IconButton icon={<Copy />} size="medium" aria-label="Копировать средняя" />
      <IconButton icon={<Copy />} size="large" aria-label="Копировать большая" />
    </div>
  ),
};

// Состояния
export const States: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton icon={<Copy />} aria-label="Обычная" />
      <IconButton icon={<Copy />} transparent aria-label="Прозрачная" />
      <IconButton icon={<Copy />} disabled aria-label="Отключенная" />
    </div>
  ),
};

// С разными иконками
export const DifferentIcons: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton icon={<Copy />} aria-label="Копировать" />
      <IconButton icon={<Check />} aria-label="Подтвердить" />
      <IconButton icon={<GearIcon />} aria-label="Настройки" />
    </div>
  ),
};

// Интерактивный пример
export const InteractiveExample: StoryObj = {
  render: () => {
    const [active, setActive] = useState(false);
    
    return (
      <IconButton 
        icon={active ? <Check /> : <Copy />} 
        onClick={() => setActive(!active)}
        aria-label={active ? "Подтверждено" : "Копировать"}
      />
    );
  },
};

// Пример с кастомными стилями
export const CustomStyled: StoryObj = {
  render: () => (
    <IconButton 
      icon={<Copy />}
      style={{
        backgroundColor: 'var(--Primary-color)',
        color: 'var(--On-primary-color)',
      }}
      classNameContainer="custom-container"
      aria-label="Кастомная кнопка"
    />
  ),
};