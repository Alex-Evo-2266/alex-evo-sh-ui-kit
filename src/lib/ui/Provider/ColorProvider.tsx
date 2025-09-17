import React, { createContext } from "react";
import { ColorState } from "../../model/color";
import { ThemeBase, useThemes } from "../../hooks/themeColors.hook";
import { defaultColors } from "../../hooks/colorv2.hook";

export interface IColorContext{
    colors: ColorState;
    themes: Record<string, ThemeBase>;
    activeTheme: string;
    setActiveTheme: (themeName: string) => void;
    updateThemeColor: (themeName: string, key: string, value: string) => void;
    createTheme: (name: string, base?: string) => void;
    deleteTheme: (name: string) => void;
    resetTheme: (name: string) => void;
}

const foo = ()=>{}

const initData: IColorContext = {
    colors: defaultColors,
    themes: {},
    activeTheme: "",
    setActiveTheme: foo,
    updateThemeColor: foo,
    createTheme: foo,
    deleteTheme: foo,
    resetTheme: foo
}

export const ColorContext = createContext<IColorContext>(initData)


export const ColorProvider:React.FC<{children: React.ReactNode}> = ({children}) => {

    const colorControl = useThemes()

    return (
        <ColorContext.Provider value={colorControl}>
        {children}
        </ColorContext.Provider>
    )
}