import React, { createContext } from "react";
import { ScreenSizeHookOption, useScreenSize } from "../../hooks/screenSize.hook";
import { ScreenSize } from "../../model/sizeScreen";

interface ISizeContext{
    screen: ScreenSize
}

const initData: ISizeContext = {
    screen: ScreenSize.STANDART
}

export const SizeContext = createContext<ISizeContext>(initData)


export const SizeProvider:React.FC<{children: React.ReactNode, option?: ScreenSizeHookOption}> = ({children, option}) => {

    const screen = useScreenSize(option)

    return (
        <SizeContext.Provider value={screen}>
        {children}
        </SizeContext.Provider>
    )
}