// IconPicker.stories.tsx
import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Home, IconSelectField, LampIcon, Room } from "../../lib";
import { IconOption } from "../../lib/ui/Base/IconPicker/IconPicker";

const iconOptions: IconOption[] = [
  { id: "home", name: "Home", component: <Home /> },
  { id: "light", name: "Light", component: <LampIcon /> },
  { id: "fan", name: "Fan", component: <Room /> },
];

export default {
  title: "Components/Base/IconSelectField",
  component: IconSelectField,
  args: {
    icons: iconOptions
  }
} as Meta;

type Story = StoryObj<typeof IconSelectField>;

// 🔹 Пример: контролируемый компонент
export const Controlled: Story = {
  render:(args)=>{
  const [selected, setSelected] = useState<string>("home");
  return (
    <div style={{ padding: 20 }}>
      <IconSelectField icons={args.icons} value={selected} onChange={setSelected} />
      <p>Выбранная иконка: {selected}</p>
    </div>
  );
}};

export const Disabled: Story = {
  render:(args)=>{
  const [selected, setSelected] = useState<string>("home");
  return (
    <div style={{ padding: 20 }}>
      <IconSelectField icons={args.icons} disabled value={selected} onChange={setSelected} />
      <p>Выбранная иконка: {selected}</p>
    </div>
  );
}
};

// 🔹 Пример: неконтролируемый компонент
export const Uncontrolled: Story = {
  args:{
    icons: iconOptions,
    value: "light"
  },
  render:(args)=>(
    <div style={{ padding: 20 }}>
      <IconSelectField icons={args.icons} value={args.value} />
      <p>Выбранная иконка: {args.value}</p>
    </div>
  )
} 

export const ManyIcons: Story = {
  render:()=>{
  const manyIcons: IconOption[] = Array.from({ length: 40 }, (_, i) => ({
    id: `icon-${i}`,
    name: `Icon ${i}`,
    component: <div style={{ width: 24, height: 24, background: "#ccc", borderRadius: 4 }}></div>,
  }));
  const [selected, setSelected] = useState<string>("home");
  return (
    <div style={{ padding: 20 }}>
      <IconSelectField icons={manyIcons} value={selected} onChange={setSelected} />
      <p>Выбранная иконка: {selected}</p>
    </div>
  );
}
};
