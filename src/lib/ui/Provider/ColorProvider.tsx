import React, { createContext } from "react";
import { initColor, useColor } from "../../hooks/color.hook";
import { BaseColor, ChangeColor, ColorState, NightColor } from "../../model/color";

export interface IColorContext{
    colors: ColorState,
    setColor: (newColor: ChangeColor)=>void,
    nightMode: boolean,
    setNightMode: (mode: boolean)=>void,
    reCalculateColor: (mode?: boolean)=>void,
    lightColor: BaseColor | {},
    nightColor: NightColor | {}
}

const foo = ()=>{}

const initData: IColorContext = {
    colors: initColor,
    setColor: foo,
    nightMode:false,
    setNightMode: foo,
    reCalculateColor: foo,
    lightColor: {},
    nightColor: {}
}

export const ColorContext = createContext<IColorContext>(initData)


export const ColorProvider:React.FC<{children: React.ReactNode}> = ({children}) => {

    const colorControl = useColor()

    return (
        <ColorContext.Provider value={colorControl}>
        {children}
        </ColorContext.Provider>
    )
}