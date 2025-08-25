import React, { useState } from "react";
import { TextField } from "../../input/TextField/TextField";
import { SelectionDialog } from "../../Dialog/BaseDialog/SelectionDialog";

export interface IconOption {
  id: string;
  name: string;
  component: React.ReactNode;
}

export interface IconSelectFieldProps {
  icons: IconOption[];
  value?: string;
  onChange?: (id: string) => void;
  disabled?: boolean
  placeholder?: string
}

export const IconSelectField: React.FC<IconSelectFieldProps> = ({ icons, value, onChange, disabled, placeholder }) => {
  const [open, setOpen] = useState(false);
  const selectedIcon = icons.find((i) => i.id === value);

  const handleSelect = (id: string) => {
    onChange?.(id);
    setOpen(false);
  };

  return (
    <>
      <TextField 
        border 
        icon={selectedIcon?.component ?? undefined} 
        value={selectedIcon?.name} 
        readOnly 
        disabled={disabled}
        onClick={() => setOpen(true)}
        placeholder={placeholder}
      />
        {open && (
          <SelectionDialog 
            header="Icons" 
            onHide={()=>setOpen(false)} 
            onSuccess={handleSelect} 
            items={icons.map(i=>({icon: i.component, title: i.name, data: i.id}))}
          />
      )}
    </>
  );
};
