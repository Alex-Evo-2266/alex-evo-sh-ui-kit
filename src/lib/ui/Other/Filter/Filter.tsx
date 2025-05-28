import React, { useEffect, useRef } from "react";
import './Filter.scss'
import { Checkbox } from "../../input/Checkbox/Checkbox";
import { Typography } from "../../Text/Text/Typography";
import { Panel } from "../../Layout/Panel/Panel";
import { Divider } from "../Divider/Divider";
import { ModalTemplate } from "../../Dialog/TemplateDialog/ModalTemplate";
import { IPoint } from "../../../model/point";

export type FilterGroup = {
  name: string;               // Название группы фильтра (например, "Категории")
  options: string[];          // Варианты для выбора
};

export type SelectedFilters = {
  [groupName: string]: string[];  // Выбранные варианты по каждой группе
};

type MultiFilterProps = {
  filters: FilterGroup[];
  selectedFilters: SelectedFilters;
  onChange: (selected: SelectedFilters) => void;
  point?: IPoint


  isOpen: boolean;
  onClose: () => void;
};

export const MultiFilter: React.FC<MultiFilterProps> = ({
  filters,
  selectedFilters,
  onChange,
  isOpen,
  onClose,
  point = {x: 50, y: 50},
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleOption = (groupName: string, option: string) => {
    const groupSelected = selectedFilters[groupName] || [];
    const updated = groupSelected.includes(option)
      ? groupSelected.filter(v => v !== option)
      : [...groupSelected, option];

    onChange({
      ...selectedFilters,
      [groupName]: updated,
    });
  };

  const castomStyle:React.CSSProperties = {
    top: `${point.y}px`,
    left: `${point.x}px`,
    zIndex: 1000
  }

  return (
    <ModalTemplate onHide={onClose}>
        <Panel className="multi-filter" style={castomStyle}>
            <div ref={dropdownRef}>
                {filters.map(({ name, options }, index) => (
                <div key={name} style={{ marginBottom: 16 }}>
                    {index !== 0 && <Divider />}
                    <Typography type='title-2' weight='bold'>{name}</Typography>
                    <div className="filter-block">
                    {options.map(option => (
                        <label className="filter-field">
                            <Checkbox
                            name={name}
                            checked={(selectedFilters[name] || []).includes(option)}
                            onChange={()=>toggleOption(name, option)}
                            />
                            <Typography type='body'>{option}</Typography>
                        </label>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </Panel>
    </ModalTemplate>
  );
};
