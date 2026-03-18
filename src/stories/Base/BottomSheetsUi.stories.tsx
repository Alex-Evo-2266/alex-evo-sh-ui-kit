import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheetsUi, ListContainer, ListItem } from '../../lib/index';
import { within, expect, fireEvent, waitFor, fn } from 'storybook/test'
// import React from 'react';

const meta = {
  title: 'Components/Base/BottomSheetsUi',
  component: BottomSheetsUi,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
BottomSheetsUi — мобильный Bottom Sheet с поддержкой:
- Drag закрытия
- Touch и Mouse
- Анимаций
- Safe-area отступов
        `,
      },
      story: { inline: false },
      source: { state: 'open' }
    },
  },
  argTypes: {
    visible: {
      control: 'boolean',
      description: 'Показывает или скрывает BottomSheet',
    },
    bottom: {
      control: { type: 'number', min: 0, max: 200, step: 4 },
      description: 'Отступ снизу',
    },
    onHide: {
      action: 'onHide',
      description: 'Срабатывает при закрытии',
    },
    children: {
      control: false,
      description: 'Контент BottomSheet',
    },
  },
} satisfies Meta<typeof BottomSheetsUi>

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    visible: true,
    bottom: 0,
    onHide:fn(),
    children: (
      <ListContainer transparent>
        <ListItem header="Item 1" hovered />
        <ListItem header="Item 2" hovered />
        <ListItem header="Item 3" hovered />
      </ListContainer>
    ),
  },
}

export const WithBottomOffset: Story = {
  tags: ['!autodocs'],
  args: {
    visible: true,
    onHide: fn(),
    bottom: 32,
    children: (
      <ListContainer transparent>
        <ListItem header="With safe area" />
      </ListContainer>
    ),
  },
}

export const Hidden: Story = {
  tags: ['!autodocs'],
  args: {
    visible: false,
    onHide: fn(),
    children: <div>Hidden</div>,
  },
}

export const Visible: Story = {
  tags: ['!autodocs'],
  args: {
    visible: true,
    onHide: fn(),
    children: <div data-testid="content">Content</div>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(await canvas.findByTestId('content')).toBeInTheDocument()
  },
}

export const CloseTest: Story = {
  tags: ['!autodocs'],
  args: {
    visible: true,
    onHide: fn(),
    children: <div>Close me</div>,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)

    const handle = canvas.getByTestId('bottom-sheet-handle')

    // имитируем drag вниз
    fireEvent.mouseDown(handle)
    fireEvent.mouseMove(document.body, {
      clientY: window.innerHeight - 10,
    })
    fireEvent.mouseUp(document.body)

    await waitFor(() => {
      expect(args.onHide).toHaveBeenCalled()
    })
  },
}
