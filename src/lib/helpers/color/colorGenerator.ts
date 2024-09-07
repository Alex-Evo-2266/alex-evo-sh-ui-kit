import { replaceAll } from "../replaceAll";
import { pSBC } from "./colorContrast";
import { HEXtoRGB, HSLtoHSV, HSVtoHSL, HSVtoRGB, RGBtoHEX, RGBtoHSV } from "./colorConvert";

export function getTextColor(bgColor:string){
    const rgb = HEXtoRGB(bgColor)
    if(!rgb)
        return "#fff"
    return ((rgb.r * 0.299 + rgb.g * 0.589 + rgb.b * 0.114) > 186)? "#000000" : "#FFFFFF"
}

// export function getContainerColor(color: string, night: boolean = false){
//     let d = HSVtoHSL(RGBtoHSV(HEXtoRGB(color)))
//     if(night){
//         d = {h:d.h, s:d.s, l:d.l - 0.3}
//     }
//     else{
//         d = {h:d.h, s:d.s, l:d.l + 0.3}
//     }
//     return `#${RGBtoHEX(HSVtoRGB(HSLtoHSV(vilidateContainerColorHSL(d))))}`
// }

export function getContainerColor(color: string, night: boolean = false){
    return pSBC(night?-0.6:0.3, color) ?? color
}

// function vilidateContainerColorHSL(h: any, s?: any, l?:any){
//     if (arguments.length === 1) {
//         s = h.s, l = h.l, h = h.h;
//     }
//     l = (l > 0.85)?0.85:(l < 0.25)?0.25:l
//     s = (s > 0.85)?0.85:(s < 0.25)?0.25:s
//     return {h, s, l}
// }

export const getNameVarColor = (key:string) => `--${replaceAll(key, "_", "-")}`
export const getKeyByColorVar = (colorVar:string) => replaceAll(colorVar, "-", "_").slice(2)
