import { replaceAll } from "../replaceAll";
import { pSBC } from "./colorContrast";
import { HEXtoRGB } from "./colorConvert";

export function getTextColor(bgColor:string){
    const rgb = HEXtoRGB(bgColor)
    if(!rgb)
        return "#fff"
    return ((rgb.r * 0.299 + rgb.g * 0.589 + rgb.b * 0.114) > 186)? "#000000" : "#FFFFFF"
}

export function getContainerColor(color: string, night: boolean = false){
    return pSBC(night?-0.6:0.3, color) ?? color
}

export const getNameVarColor = (key:string) => `--${replaceAll(key, "_", "-")}`
export const getKeyByColorVar = (colorVar:string) => replaceAll(colorVar, "-", "_").slice(2)
