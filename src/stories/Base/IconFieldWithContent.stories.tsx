// IconPicker.stories.tsx
import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IconsSelect } from "../../lib/ui/Base/IconPicker/IconPicker";

export default {
  title: "Components/Base/IconSelectFieldWhitContent",
  component: IconsSelect
} as Meta;

type Story = StoryObj<typeof IconsSelect>;

// 🔹 Пример: контролируемый компонент
export const Controlled: Story = {
  render:()=>{
  const [selected, setSelected] = useState<string>("home");
  return (
    <div style={{ padding: 20 }}>
      <IconsSelect value={selected} onChange={setSelected} />
      <p>Выбранная иконка: {selected}</p>
    </div>
  );
}};

