import { useState, useCallback } from "react"
import { getTextColor, getContainerColor } from "../helpers/color/colorGenerator"
import { pSBC } from "../helpers/color/colorContrast"
import { BaseColor, ColorState } from "../model/color"

// 🔹 Дефолтные цвета (фолбэк)
export const defaultColors: ColorState = {
  // BaseColor
  Primary_color: "#6750A4",        // фиолетовый акцент
  Secondary_color: "#8c5a9c",      // серо-фиолетовый
  Tertiary_color: "#7D5260",       // розово-коричневый
  Background_color: "#FFFBFE",     // почти белый
  Surface_container_color: "#FFFBFE",
  Error_color: "#B3261E",          // красный
  Outline_color: "#79747E",        // серый
  Shadow_color: "#000000",        // чёрный (для теней)


  // TextColor
  On_primary_color: "#FFFFFF",
  On_secondary_color: "#FFFFFF",
  On_tertiary_color: "#FFFFFF",
  On_background_color: "#1C1B1F",

  // ContainerColor
  Primary_container_color: "#EADDFF",
  Secondary_container_color: "#E8DEF8",
  Tertiary_container_color: "#FFD8E4",
  Error_container_color: "#F9DEDC",

  // TextContainerColor
  On_primary_container_color: "#21005D",
  On_secondary_container_color: "#1D192B",
  On_tertiary_container_color: "#31111D",
  On_error_container_color: "#410E0B",
  On_error_color: "#FFFFFF",

  // SurfaceColor
  Surface_container_lowest_color: "#FFFFFF",
  Surface_container_low_color: "#F7F2FA",
  Surface_container_high_color: "#D0BCFF",
  Surface_container_highest_color: "#4F378B",
  On_surface_color: "#1C1B1F",
  On_surface_variant_color: "#49454F",
  Surface_container_hover_color: "#F2E7FE",

  // Outline
  Outline_variant_color: "#CAC4D0",
};

// ===== Зависимости групп цветов =====
const colorGroups: Record<string, (base: string, reverse: boolean) => Record<string, string>> = {
  Primary_color: (base, reverse) => {
    const container = getContainerColor(base, reverse)
    return {
      Primary_color: base,
      On_primary_color: getTextColor(base),
      Primary_container_color: container,
      On_primary_container_color: getTextColor(container),
    }
  },
  Secondary_color: (base, reverse) => {
    const container = getContainerColor(base, reverse)
    return {
      Secondary_color: base,
      On_secondary_color: getTextColor(base),
      Secondary_container_color: container,
      On_secondary_container_color: getTextColor(container),
    }
  },
  Tertiary_color: (base, reverse) => {
    const container = getContainerColor(base, reverse)
    return {
      Tertiary_color: base,
      On_tertiary_color: getTextColor(base),
      Tertiary_container_color: container,
      On_tertiary_container_color: getTextColor(container),
    }
  },
  Background_color: (base, _) => ({
    Background_color: base,
    On_background_color: getTextColor(base),
  }),
  Error_color: (base, reverse) => {
    const container = getContainerColor(base, reverse)
    return {
      Error_color: base,
      On_error_color: getTextColor(base),
      Error_container_color: container,
      On_error_container_color: getTextColor(container),
    }
  },
  Surface_container_color: (base, reverse) => {
    const low = pSBC(reverse?-0.2:0.2, base) ?? base
    const lowest = pSBC(reverse?-0.4:0.4, base) ?? base
    const high = pSBC(reverse?0.2:-0.2, base) ?? base
    const highest = pSBC(reverse?0.4:-0.4, base) ?? base
    const hover = pSBC(reverse?-0.5:0.5, base) ?? base

    return {
      Surface_container_color: base,
      On_surface_color: getTextColor(base),
      Surface_container_low_color: low,
      Surface_container_lowest_color: lowest,
      Surface_container_high_color: high,
      Surface_container_highest_color: highest,
      Surface_container_hover_color: hover,
      On_surface_variant_color:
        pSBC(reverse?-0.6:0.4, getTextColor(base)) ?? getTextColor(base),
    }
  },
  Outline_color: (base, reverse) => ({
    Outline_color: base,
    Outline_variant_color: pSBC(reverse?0.1:-0.1, base) ?? base,
  }),
}

// ===== Хук =====
export function useColors(initialColors: BaseColor, reverse: boolean = false) {
const [colors, setColors] = useState<ColorState>({...defaultColors, ...initialColors})
const [rev, setRev] = useState<boolean>(reverse)

  const setColor = useCallback(
    (key: string, value: string) => {
      const updater = colorGroups[key]
      if (!updater) return

      // Получаем всю группу
      const newGroup = updater(value, rev)

      // Обновляем state
      setColors((prev) => ({ ...prev, ...newGroup }))

      // Обновляем CSS-переменные
      Object.entries(newGroup).forEach(([k, v]) => {
        document.body.style.setProperty(`--${k.replace(/_/g, "-")}`, v)
      })
    },
    [rev]
  )

  const setReverse = (reverse: boolean) => setRev(reverse)

  return {
    colors,
    setColor,
    setReverse
  }
}
