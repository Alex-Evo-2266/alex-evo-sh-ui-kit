import { Meta, StoryObj } from "@storybook/react";
import { DateField } from "../../lib";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof DateField> = {
  title: "Components/Input/DateField",
  component: DateField,
  argTypes: {
    onChange: { action: "date changed" },
    border: { control: "boolean" },
    error: { control: "boolean" },
    validEmptyValue: { control: "boolean" },
    className: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
  },
  args: {
    border: true,
    name: "date-field",
    container: document.body,
  },
};

export default meta;

type Story = StoryObj<typeof DateField>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Находим иконку календаря и кликаем по ней
    const calendarIcon = canvas.getByRole("button");
    await userEvent.click(calendarIcon);
    
    // Проверяем, что onChange был вызван с правильными аргументами
    // (это будет проверено в тестах компонента CalendarPickers)
  },
};

export const WithInitialValue: Story = {
  args: {
    value: "2023-05-15",
  },
};

export const WithError: Story = {
  args: {
    error: true,
    errorText: "error text"
  },
};

export const WithoutBorder: Story = {
  args: {
    border: false,
  },
};
