import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { GearIcon, NumberField } from "../../../lib";

const meta: Meta<typeof NumberField> = {
  title: "Components/Input/NumberField",
  component: NumberField,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Размер компонента",
    },
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
    placeholder: {
      control: "text",
      description: "Подсказка в поле",
    },
    error: {
      control: "boolean",
      description: "Флаг ошибки",
    },
    disabled: {
      control: "boolean",
      description: "Отключенное состояние",
    },
    border: {
      control: "boolean",
      description: "Показать рамку",
    },
    transparent: {
      control: "boolean",
      description: "Прозрачный фон",
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
    onClear: {
      action: "cleared",
      description: "Обработчик очистки поля",
    },
  },
  args:{
    border: true,
    onClear: undefined,
    onChange: console.log
  }
};

export default meta;

type Story = StoryObj<typeof NumberField>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || 0);
    return (
      <NumberField
        {...args}
        value={value}
        onChange={(val) => {
          setValue(val);
          args.onChange?.(val);
        }}
      />
    );
  },
};

/** Базовое числовое поле */
export const Basic = {
  ...Template,
  args: {
    placeholder: "Enter number",
  },
};

/** Числовое поле с ограничениями */
export const WithMinMax = {
  ...Template,
  args: {
    min: 0,
    max: 100,
    value: 50,
    placeholder: "Value between 0-100",
  },
};

/** Числовое поле с кастомным шагом */
export const WithStep = {
  ...Template,
  args: {
    min: 0,
    max: 10,
    step: 0.5,
    value: 5,
    placeholder: "Step 0.5",
  },
};

/** Числовое поле с иконкой */
export const WithIcon = {
  ...Template,
  args: {
    placeholder: "With icon",
    icon: <GearIcon/>,
  },
};

/** Числовое поле с очисткой */
export const WithClear = {
  ...Template,
  args: {
    value: 42,
    placeholder: "Clearable field",
  },
};

/** Различные размеры */
export const Sizes = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <NumberField size="small" placeholder="Small" value={5} />
      <NumberField size="medium" placeholder="Medium (default)" value={10} />
      <NumberField size="large" placeholder="Large" value={15} />
    </div>
  ),
};

/** Отключенное состояние */
export const Disabled = {
  ...Template,
  args: {
    value: 25,
    placeholder: "Disabled",
    disabled: true,
  },
};

/** Состояние ошибки */
export const ErrorState = {
  ...Template,
  args: {
    value: -1,
    placeholder: "Invalid value",
    error: true,
    errorText: "errorText"
  },
};

/** Адаптивное поведение */
export const InteractiveExample = {
  render: () => {
    const [value, setValue] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [step, setStep] = useState(1);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <div>
            <label>Min value</label>
            <NumberField value={min} onChange={setMin} />
          </div>
          <div>
            <label>Max value</label>
            <NumberField value={max} onChange={setMax} />
          </div>
          <div>
            <label>Step</label>
            <NumberField min={0.1} step={0.1} value={step} onChange={setStep} />
          </div>
        </div>

        <NumberField
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={setValue}
          placeholder="Interactive field"
        />

        <div>Current value: {value}</div>
      </div>
    );
  },
};