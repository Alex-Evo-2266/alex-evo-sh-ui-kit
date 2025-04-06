import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { GearIcon, LogoutIcon, ScreenSize, SelectField, UserIcon } from "../../lib";


const meta: Meta<typeof SelectField> = {
  title: "Components/Input/SelectField",
  component: SelectField,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Размер компонента",
    },
    items: {
      control: "object",
      description: "Опции для выбора (массив строк или объектов {title, value})",
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
  },
  args:{
    container: document.body
  }
};

export default meta;

type Story = StoryObj<typeof SelectField>;

const stringOptions = ["Option 1", "Option 2", "Option 3"];

const objectOptions = [
  { title: "Profile", value: "profile", icon: <UserIcon /> },
  { title: "Settings", value: "settings", icon: <GearIcon /> },
  { title: "Logout", value: "logout", icon: <LogoutIcon /> },
];

const mixedOptions = [
  "First option",
  { title: "Second option", value: "second" },
  { title: "Third option", value: "third" },
];

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || "");
    return (
      <div style={{ width: "300px" }}>
        <SelectField
          {...args}
          value={value}
          onChange={(val) => {
            setValue(val);
            args.onChange?.(val);
          }}
        />
      </div>
    );
  },
};

/** Базовый Select с текстовыми опциями */
export const Basic: Story = {
  ...Template,
  args: {
    items: stringOptions,
    placeholder: "Select an option",
  },
};

/** Select с объектами опций и иконками */
export const WithIcons: Story = {
  ...Template,
  args: {
    items: objectOptions,
    placeholder: "Select action",
    border: true,
  },
};

/** Select с комбинированными опциями */
export const MixedOptions: Story = {
  ...Template,
  args: {
    items: mixedOptions,
    placeholder: "Choose option",
    border: true,
  },
};

/** Select с ошибкой */
export const ErrorState: Story = {
  ...Template,
  args: {
    items: stringOptions,
    placeholder: "Select an option",
    error: true,
    border: true,
  },
};

/** Отключенный Select */
export const Disabled: Story = {
  ...Template,
  args: {
    items: stringOptions,
    placeholder: "Disabled select",
    disabled: true,
    border: true,
  },
};

/** Различные размеры Select */
export const Sizes = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <SelectField
        items={stringOptions}
        placeholder="Small select"
        size="small"
        container={document.body}
        border
      />
      <SelectField
        items={stringOptions}
        placeholder="Medium select (default)"
        container={document.body}
        size="medium"
        border
      />
      <SelectField
        items={stringOptions}
        placeholder="Large select"
        size="large"
        container={document.body}
        border
      />
    </div>
  ),
};

/** Адаптивный Select для мобильных устройств */
export const MobileView = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <SelectField
          items={stringOptions}
          placeholder="Mobile select"
          container={document.body}
          screensize={ScreenSize.MOBILE}
          value={value}
          onChange={setValue}
          border
        />
      </div>
    );
  },
};

/** error text Select */
export const Error = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <SelectField
        items={stringOptions}
        placeholder="Small select"
        size="small"
        container={document.body}
        errorText="error text"
        border
      />
      <SelectField
        items={stringOptions}
        placeholder="Medium select (default)"
        container={document.body}
        size="medium"
        errorText="error text"
        border
      />
      <SelectField
        items={stringOptions}
        placeholder="Large select"
        size="large"
        container={document.body}
        border
        errorText="error text"
      />
    </div>
  ),
};
