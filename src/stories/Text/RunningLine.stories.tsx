// import type { Meta, StoryObj } from '@storybook/react';
// import { RunningLine } from '../../lib/index';

// const meta = {
//   title: 'Components/Text/RunningLine',
//   component: RunningLine,
//   parameters: {
//     layout: 'centered',
//   },
//   tags: ['autodocs'],
//   argTypes: {
    
//   },
//   args: {
//     style: {width:"200px"}
//   },
// } satisfies Meta<typeof RunningLine>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Base: Story = {
//   args: {
//     text: "test"
//   },
// };


// export const Long: Story = {
//     args: {
//       text: "asedhd awh jrd etse jdxdrtj rysddxdf  f gfxf"
//     },
//   };
  
import type { Meta, StoryObj } from '@storybook/react';
import { ScreenSize, RunningLine } from '../../lib';

const meta: Meta<typeof RunningLine> = {
  title: 'Components/Text/RunningLine',
  component: RunningLine,
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
    text: {
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
type Story = StoryObj<typeof RunningLine>;

export const BodyText: Story = {
  args: {
    type: 'body',
    text: 'Основной текст (body)',
  },
};

export const SmallText: Story = {
  args: {
    type: 'small',
    text: 'Мелкий текст (small)',
  },
};

export const Heading: Story = {
  args: {
    type: 'heading',
    text: 'Заголовок (heading)',
  },
};

export const Title: Story = {
  args: {
    type: 'title',
    text: 'Основной заголовок (title)',
  },
};

export const Title2: Story = {
  args: {
    type: 'title-2',
    text: 'Второстепенный заголовок (title-2)',
  },
};

export const DifferentWeights: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RunningLine type="body" weight="thin" text='Тонкий текст (thin)'></RunningLine>
      <RunningLine type="body" weight="standart" text='Стандартный текст (standart)'></RunningLine>
      <RunningLine type="body" weight="bold" text='Жирный текст (bold)'></RunningLine>
    </div>
  ),
};

export const DifferentDensities: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
      <RunningLine type="body" density="tight" text='Плотный межстрочный интервал (tight)'></RunningLine>
      <RunningLine type="body" density="normal" text='Нормальный межстрочный интервал (normal)'></RunningLine>
      <RunningLine type="body" density="loose" text='Свободный межстрочный интервал (loose)'></RunningLine>
    </div>
  ),
};

export const ResponsiveExample: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>Mobile (small-screen)</h3>
        <RunningLine type="title" screensize={ScreenSize.MOBILE} text='Заголовок'></RunningLine>
        <RunningLine type="body" screensize={ScreenSize.MOBILE} text='Основной текст'></RunningLine>
      </div>
      <div>
        <h3>Standart (standart-screen)</h3>
        <RunningLine type="title" screensize={ScreenSize.STANDART} text='Заголовок'></RunningLine>
        <RunningLine type="body" screensize={ScreenSize.STANDART} text='Основной текст'></RunningLine>
      </div>
      <div>
        <h3>Big screen</h3>
        <RunningLine type="title" screensize={ScreenSize.BIG_SCREEN} text='Заголовок'></RunningLine>
        <RunningLine type="body" screensize={ScreenSize.BIG_SCREEN}text='Основной текст'></RunningLine>
      </div>
    </div>
  ),
};