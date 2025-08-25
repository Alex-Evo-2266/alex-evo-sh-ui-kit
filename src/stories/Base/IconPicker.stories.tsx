// IconPicker.stories.tsx
import { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Home, IconSelectField, LampIcon, Room } from "../../lib";
import { IconOption, IconSelectFieldProps } from "../../lib/ui/Base/IconPicker/IconPicker";

export default {
  title: "Components/Base/IconSelectField",
  component: IconSelectField,
} as Meta;

const iconOptions: IconOption[] = [
  { id: "home", name: "Home", component: <Home /> },
  { id: "light", name: "Light", component: <LampIcon /> },
  { id: "fan", name: "Fan", component: <Room /> },
];

// 🔹 Пример: контролируемый компонент
export const Controlled: Story = () => {
  const [selected, setSelected] = useState<string>("home");
  return (
    <div style={{ padding: 20 }}>
      <IconSelectField icons={iconOptions} value={selected} onChange={setSelected} />
      <p>Выбранная иконка: {selected}</p>
    </div>
  );
};

export const Disabled: Story = () => {
  const [selected, setSelected] = useState<string>("home");
  return (
    <div style={{ padding: 20 }}>
      <IconSelectField disabled icons={iconOptions} value={selected} onChange={setSelected} />
      <p>Выбранная иконка: {selected}</p>
    </div>
  );
};

// 🔹 Пример: неконтролируемый компонент
export const Uncontrolled: Story<IconSelectFieldProps> = (args) => (
  <div style={{ padding: 20 }}>
    <IconSelectField {...args} />
  </div>
);
Uncontrolled.args = {
  icons: iconOptions,
  value: "light"
};

// 🔹 Пример: с большим количеством иконок
export const ManyIcons: Story = () => {
  const manyIcons: IconOption[] = Array.from({ length: 40 }, (_, i) => ({
    id: `icon-${i}`,
    name: `Icon ${i}`,
    component: <div style={{ width: 24, height: 24, background: "#ccc", borderRadius: 4 }}></div>,
  }));

  return (
    <div style={{ padding: 20 }}>
      <IconSelectField icons={manyIcons} />
    </div>
  );
};
