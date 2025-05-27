import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RunningLine, ScreenSize } from '../../lib';

const meta: Meta<typeof RunningLine> = {
  title: 'Components/Text/RunningLine',
  component: RunningLine,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['body', 'small', 'heading', 'title', 'title-2'],
    },
    screensize: {
      control: { type: 'select' },
      options: ['MOBILE', 'STANDART', 'BIG_SCREEN'],
    },
    weight: {
      control: { type: 'select' },
      options: ['thin', 'standart', 'bold'],
    },
    density: {
      control: { type: 'select' },
      options: ['tight', 'normal', 'loose'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RunningLine>;

export const Basic: Story = {
  args: {
    type: 'heading',
    text: 'Внимание! Объявление о срочном обновлении системы безопасности. Пожалуйста, перезапустите устройство.',
    screensize: ScreenSize.STANDART,
  },
};

export const ResponsiveBehavior: Story = () => {
  const [containerWidth, setContainerWidth] = useState(400);
  const [text] = useState(
    '⚠️ Важное объявление:'
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <label>
        Ширина контейнера: {containerWidth}px
        <input
          type="range"
          min={200}
          max={1000}
          step={10}
          value={containerWidth}
          onChange={(e) => setContainerWidth(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </label>

      <div
        style={{
          width: containerWidth,
          border: '1px solid #ccc',
          padding: 8,
          resize: 'horizontal',
          overflow: 'auto',
        }}
      >
        <RunningLine
          type="heading"
          screensize={ScreenSize.STANDART}
          text={text}
        />
      </div>
    </div>
  );
};
ResponsiveBehavior.storyName = 'Проверка адаптивности и анимации';
