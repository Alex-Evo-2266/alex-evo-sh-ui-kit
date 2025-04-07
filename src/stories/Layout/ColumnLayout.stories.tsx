import { Meta, StoryObj } from "@storybook/react";
import { ColumnLayout, IColumnElement } from "../../lib";

const meta: Meta<typeof ColumnLayout> = {
  title: "Components/Layout/ColumnLayout",
  component: ColumnLayout,
  tags: ["autodocs"],
  argTypes: {
    countColumn: {
      control: { type: "number", min: 1, max: 6 },
      description: "Количество колонок",
    },
    gap: {
      control: { type: "number", min: 0, max: 50 },
      description: "Отступ между колонками в пикселях",
    },
    minColumnWidth: {
      control: "text",
      description: "Минимальная ширина колонки (CSS значение, например '100px')",
    },
    onClickColl: {
      action: "clicked on column",
      description: "Обработчик клика по колонке",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColumnLayout>;

// Вспомогательный компонент для демонстрации
const DemoItem = ({ text, color }: { text: string; color?: string }) => (
  <div style={{
    padding: "10px",
    margin: "5px 0",
    backgroundColor: color || "#f0f0f0",
    borderRadius: "4px",
  }}>
    {text}
  </div>
);

// Подготовка элементов для примеров
const generateItems = (count: number, columns: number): IColumnElement[] => {
  return Array.from({ length: count }).map((_, i) => ({
    indexCol: i % columns,
    node: <DemoItem text={`Item ${i + 1}`} color={`hsl(${(i * 30) % 360}, 70%, 80%)`} />,
  }));
};

export const Basic: Story = {
  args: {
    countColumn: 3,
    items: generateItems(9, 3),
    gap: 10,
  },
};

export const DifferentItemsCount: Story = {
  args: {
    countColumn: 4,
    items: [
      { indexCol: 0, node: <DemoItem text="Column 1 Item 1" /> },
      { indexCol: 1, node: <DemoItem text="Column 2 Item 1" /> },
      { indexCol: 1, node: <DemoItem text="Column 2 Item 2" /> },
      { indexCol: 2, node: <DemoItem text="Column 3 Item 1" /> },
      { indexCol: 2, node: <DemoItem text="Column 3 Item 2" /> },
      { indexCol: 2, node: <DemoItem text="Column 3 Item 3" /> },
      { indexCol: 3, node: <DemoItem text="Column 4 Item 1" /> },
    ],
    gap: 15,
  },
};

export const WithMinWidth: Story = {
  args: {
    countColumn: 5,
    items: generateItems(15, 5),
    gap: 8,
    minColumnWidth: "150px",
  },
  name: "С минимальной шириной колонки",
};

export const InteractiveExample: Story = {
  args: {
    countColumn: 2,
    items: generateItems(6, 2),
    gap: 20,
    onClickColl: (index) => console.log(`Column ${index} clicked`),
  },
  name: "Интерактивный пример",
};

export const WithCustomStyles: Story = {
  args: {
    countColumn: 3,
    items: generateItems(9, 3),
    gap: 10,
    style: {
      backgroundColor: "#f5f5f5",
      padding: "15px",
      borderRadius: "8px",
    },
    classNameColumn: "custom-column-class",
  },
  decorators: [
    (Story) => (
      <div>
        <style>{`
          .custom-column-class {
            border: 1px dashed #ccc;
            padding: 10px;
          }
        `}</style>
        <Story />
      </div>
    ),
  ],
  name: "С кастомными стилями",
};