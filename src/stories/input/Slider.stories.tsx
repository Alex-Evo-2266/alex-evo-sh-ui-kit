import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Slider } from "../../lib";

const meta: Meta<typeof Slider> = {
  title: "Components/Input/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    min: {
      control: "number",
      description: "Минимальное значение",
    },
    max: {
      control: "number",
      description: "Максимальное значение",
    },
    step: {
      control: "number",
      description: "Шаг изменения",
    },
    value: {
      control: "number",
      description: "Текущее значение",
    },
    showMinMax: {
      control: "boolean",
      description: "Показывать минимальное и максимальное значения",
    },
    showValue: {
      control: "boolean",
      description: "Показывать текущее значение при фокусе",
    },
    disabled: {
      control: "boolean",
      description: "Отключенное состояние",
    },
    onChange: {
      action: "changed",
      description: "Обработчик изменения значения",
    },
    onFocus: {
      action: "focused",
      description: "Обработчик получения фокуса",
    },
    onBlur: {
      action: "blurred",
      description: "Обработчик потери фокуса",
    },
    onMouseUp: {
      action: "mouseUp",
      description: "Обработчик отпускания кнопки мыши",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || args.min || 0);
    return (
      <Slider
        {...args}
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
          args.onChange?.(e);
        }}
      />
    );
  },
};

/** Базовый слайдер */
export const Basic = {
  ...Template,
  args: {
    min: 0,
    max: 100,
    value: 50,
  },
};

/** Слайдер с минимальным и максимальным значениями */
export const WithMinMax = {
  ...Template,
  args: {
    min: 0,
    max: 100,
    value: 30,
    showMinMax: true,
  },
};

/** Слайдер с кастомным шагом */
export const WithStep = {
  ...Template,
  args: {
    min: 0,
    max: 10,
    step: 0.5,
    value: 5,
    showMinMax: true,
  },
};


/** Отключенный слайдер */
export const Disabled = {
  ...Template,
  args: {
    min: 0,
    max: 100,
    value: 40,
    disabled: true,
    showMinMax: true,
  },
};

/** Слайдер с диапазоном */
export const RangeSlider = {
  render: () => {
    const [values, setValues] = useState([20, 80]);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <Slider
          min={0}
          max={100}
          value={values[0]}
          onChange={(e) => setValues([Number(e.target.value), values[1]])}
          showMinMax
        />
        <Slider
          min={0}
          max={100}
          value={values[1]}
          onChange={(e) => setValues([values[0], Number(e.target.value)])}
          showMinMax
        />
        <div>Selected range: {values[0]} - {values[1]}</div>
      </div>
    );
  },
};