import { useState, useCallback, useEffect } from "react"
import { useColors } from "./colorv2.hook"
import { BaseColor } from "../model/color"

export interface ThemeBase{
  colors: BaseColor,
  reverse?: boolean
}

// ===== Базовые темы =====
const baseThemes: Record<string, ThemeBase> = {
  light: {
    colors:{
      Primary_color: "#6750A4",
      Secondary_color: "#625B71",
      Tertiary_color: "#7D5260",
      Surface_container_color: "#F3EDF7",
      Background_color: "#FEF7FF",
      Error_color: "#B3261E",
      Outline_color: "#79747E",
      Shadow_color: "#000000",
    }
  },
  dark: {
    reverse: true,
    colors: {
      Primary_color: "#D0BCFF",
      Secondary_color: "#CCC2DC",
      Tertiary_color: "#EFB8C8",
      Surface_container_color: "#141218",
      Background_color: "#1C1B1F",
      Error_color: "#F2B8B5",
      Outline_color: "#938F99",
      Shadow_color: "#000000",
    }
  },
}

export function useThemes(initialTheme: string = "light") {
  const [themes, setThemes] = useState<Record<string, ThemeBase>>(
    baseThemes
  )
  const [activeTheme, setActiveTheme] = useState<string>(initialTheme)

  const { colors, setColor, setReverse } = useColors(themes[activeTheme].colors, themes[activeTheme].reverse)

  // применяем тему в CSS
  const applyTheme = useCallback(
    (themeName: string) => {
      const theme = themes[themeName].colors
      if (!theme) return
      Object.entries(theme).forEach(([key, value]) => {
        setColor(key, value)
      })
      setReverse(themes[themeName].reverse ?? false)
      setActiveTheme(themeName)
    },
    [themes, setColor]
  )

  useEffect(() => {
    applyTheme(activeTheme)
  }, [activeTheme, applyTheme])

  // изменить цвет в конкретной теме (активной или нет)
  const updateThemeColor = useCallback(
    (themeName: string, key: string, value: string) => {
      setThemes((prev) => ({
        ...prev,
        [themeName]: {
          colors: {...prev[themeName].colors, [key]: value},
          reverse: prev[themeName].reverse
        },
      }))
    },
    []
  )

  // создать новую тему
  const createTheme = useCallback((name: string, base: string = "light", reverse?: boolean) => {
    setThemes((prev) => ({
      ...prev,
      [name]: { colors: prev[base].colors, reverse:reverse === undefined? prev[base].reverse:reverse},
    }))
  }, [])

  // удалить тему
  const deleteTheme = useCallback((name: string) => {
    setThemes((prev) => {
      const copy = { ...prev }
      delete copy[name]
      return copy
    })
    if (activeTheme === name) {
      setActiveTheme("light") // возврат на дефолт
    }
  }, [activeTheme])

  // сбросить тему до базовой
  const resetTheme = useCallback(
    (name: string) => {
      if (baseThemes[name]) {
        setThemes((prev) => ({
          ...prev,
          [name]: { ...baseThemes[name] },
        }))
      }
    },
    []
  )

  return {
    colors,
    themes,
    activeTheme,
    setActiveTheme: applyTheme,
    updateThemeColor,
    createTheme,
    deleteTheme,
    resetTheme,
  }
}
