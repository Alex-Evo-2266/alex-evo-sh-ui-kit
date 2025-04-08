import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextField } from "../../lib";
import { GearIcon, Search } from "../../lib/ui/Icons";

const meta: Meta<typeof TextField> = {
  title: "Components/Input/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Размер текстового поля",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
      description: "Тип поля ввода",
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
    readOnly: {
      control: "boolean",
      description: "Только для чтения",
    },
    border: {
      control: "boolean",
      description: "Показать рамку",
    },
    transparent: {
      control: "boolean",
      description: "Прозрачный фон",
    },
    validEmptyValue: {
      control: "boolean",
      description: "Валидация пустого значения",
    },
    onChange: {
      action: "changed",
      description: "Обработчик изменения значения",
    },
    onFocus: {
      action: "focused",
      description: "Обработчик фокуса",
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
};

export default meta;

type Story = StoryObj<typeof TextField>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || "");
    return (
      <TextField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    );
  },
};

/** Базовое текстовое поле */
export const Basic = {
  ...Template,
  args: {
    placeholder: "Введите текст",
  },
};

/** Поле с иконкой */
export const WithIcon = {
  ...Template,
  args: {
    placeholder: "Поиск",
    icon: <Search />,
  },
};

/** Поле с очисткой */
export const WithClearButton = {
  ...Template,
  args: {
    placeholder: "Поиск",
    icon: <Search/>,
    value: "Пример текста",
    onClear: () => console.log("Field cleared"),
  },
};

/** Поле с ошибкой */
export const ErrorState = {
  ...Template,
  args: {
    placeholder: "Неверное значение",
    error: true,
    value: "Ошибка",
  },
};

/** Поле с рамкой */
export const Bordered = {
  ...Template,
  args: {
    placeholder: "Поле с рамкой",
    border: true,
  },
};

/** Поле с очисткой */
export const WithClearButtonBordered = {
  ...Template,
  args: {
    placeholder: "Поиск",
    icon: <Search/>,
    border: true,
    value: "Пример текста",
    onClear: () => console.log("Field cleared"),
  },
};


/** Парольное поле */
export const PasswordField = {
  ...Template,
  args: {
    placeholder: "Введите пароль",
    type: "password",
  },
};

/** Отключенное поле */
export const Disabled = {
  ...Template,
  args: {
    placeholder: "Отключенное поле",
    disabled: true,
    value: "Недоступно",
  },
};

/** Поле только для чтения */
export const ReadOnly = {
  ...Template,
  args: {
    placeholder: "Только чтение",
    readOnly: true,
    value: "Текст только для чтения",
  },
};

/** Подсказка */
export const HelpyText = {
  ...Template,
  args: {
    placeholder: "Подсказка",
    helperText: "Текст Подсказки",
    value: "Тест Подсказки",
    border: true
  },
};

/** Ошибка */
export const ErrorText = {
  ...Template,
  args: {
    placeholder: "Ошибка",
    errorText: "Текст Ошибки",
    value: "Тест Ошибки",
    error: true,
    border: true
  },
};

/** Различные размеры */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TextField placeholder="Маленькое поле" size="small" />
      <TextField placeholder="Среднее поле (по умолчанию)" size="medium" />
      <TextField placeholder="Большое поле" size="large" />
    </div>
  ),
};

/** Различные размеры и типы */
export const SizesAndTyes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TextField placeholder="Маленькое поле" size="small" />
      <TextField placeholder="Среднее поле (по умолчанию)" size="medium" />
      <TextField placeholder="Большое поле" size="large" />
      <TextField placeholder="Маленькое поле" size="small" border/>
      <TextField placeholder="Среднее поле (по умолчанию)" size="medium" border/>
      <TextField placeholder="Большое поле" size="large" border/>
    </div>
  ),
};

/** Различные размеры и типы */
export const SizesAndIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TextField placeholder="Маленькое поле" size="small" icon={<GearIcon/>}/>
      <TextField placeholder="Среднее поле (по умолчанию)" size="medium" icon={<GearIcon/>}/>
      <TextField placeholder="Большое поле" size="large" icon={<GearIcon/>}/>
      <TextField placeholder="Маленькое поле" size="small" border icon={<GearIcon/>}/>
      <TextField placeholder="Среднее поле (по умолчанию)" size="medium" border icon={<GearIcon/>}/>
      <TextField placeholder="Большое поле" size="large" border icon={<GearIcon/>}/>
    </div>
  ),
};

/** Несколько полей подряд */
export const MoreField: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField placeholder="Среднее поле (по умолчанию)" size="medium" border icon={<GearIcon/>} value={"test"} helperText="подсказка"/>
      <TextField placeholder="Среднее поле (по умолчанию)" size="medium" border icon={<GearIcon/>} value={"test"} helperText="подсказка"/>
      <TextField placeholder="Среднее поле (по умолчанию)" size="medium" border icon={<GearIcon/>} value={"test"} helperText="подсказка"/>
      <TextField placeholder="Среднее поле (по умолчанию)" size="medium" border icon={<GearIcon/>} value={"test"} helperText="подсказка"/>
      <TextField placeholder="Среднее поле (по умолчанию)" size="medium" border icon={<GearIcon/>} value={"test"} helperText="подсказка"/>
      <TextField placeholder="Среднее поле (по умолчанию)" size="medium" border icon={<GearIcon/>} value={"test"} helperText="подсказка"/>
    </div>
  ),
};