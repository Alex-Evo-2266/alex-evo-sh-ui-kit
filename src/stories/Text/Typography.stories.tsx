import type { Meta, StoryObj } from '@storybook/react';
import { ScreenSize, Typography } from '../../lib';

const meta: Meta<typeof Typography> = {
  title: 'Components/Text/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['title', 'title-2', 'heading', 'body', 'small'],
      description: 'Тип текстового элемента',
    },
    screensize: {
      control: { type: 'select' },
      options: [ScreenSize.MOBILE, ScreenSize.STANDART, ScreenSize.BIG_SCREEN],
      description: 'Размер экрана для адаптации',
    },
    weight: {
      control: { type: 'select' },
      options: ['thin', 'standart', 'bold'],
      description: 'Насыщенность шрифта',
    },
    density: {
      control: { type: 'select' },
      options: ['tight', 'normal', 'loose'],
      description: 'Межстрочный интервал',
    },
    children: {
      control: 'text',
      description: 'Текст для отображения',
    },
  },
  args: {
    children: 'Пример текста',
    type: 'body',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const BodyText: Story = {
  args: {
    type: 'body',
    children: 'Основной текст (body)',
  },
};

export const SmallText: Story = {
  args: {
    type: 'small',
    children: 'Мелкий текст (small)',
  },
};

export const Heading: Story = {
  args: {
    type: 'heading',
    children: 'Заголовок (heading)',
  },
};

export const Title: Story = {
  args: {
    type: 'title',
    children: 'Основной заголовок (title)',
  },
};

export const Title2: Story = {
  args: {
    type: 'title-2',
    children: 'Второстепенный заголовок (title-2)',
  },
};

export const DifferentWeights: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography type="body" weight="thin">Тонкий текст (thin)</Typography>
      <Typography type="body" weight="standart">Стандартный текст (standart)</Typography>
      <Typography type="body" weight="bold">Жирный текст (bold)</Typography>
    </div>
  ),
};

export const DifferentDensities: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
      <Typography type="body" density="tight">Плотный межстрочный интервал (tight)</Typography>
      <Typography type="body" density="normal">Нормальный межстрочный интервал (normal)</Typography>
      <Typography type="body" density="loose">Свободный межстрочный интервал (loose)</Typography>
    </div>
  ),
};

export const ResponsiveExample: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>Mobile (small-screen)</h3>
        <Typography type="title" screensize={ScreenSize.MOBILE}>Заголовок</Typography>
        <Typography type="body" screensize={ScreenSize.MOBILE}>Основной текст</Typography>
      </div>
      <div>
        <h3>Standart (standart-screen)</h3>
        <Typography type="title" screensize={ScreenSize.STANDART}>Заголовок</Typography>
        <Typography type="body" screensize={ScreenSize.STANDART}>Основной текст</Typography>
      </div>
      <div>
        <h3>Big screen</h3>
        <Typography type="title" screensize={ScreenSize.BIG_SCREEN}>Заголовок</Typography>
        <Typography type="body" screensize={ScreenSize.BIG_SCREEN}>Основной текст</Typography>
      </div>
    </div>
  ),
};