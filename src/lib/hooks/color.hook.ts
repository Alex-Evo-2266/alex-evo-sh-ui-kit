import { useCallback, useEffect, useState } from "react"
import { getContainerColor, getKeyByColorVar, getNameVarColor, getTextColor } from "../helpers/color/colorGenerator"
import { BaseColor, ChangeColor, ColorState, mapNightColorToBaseColor, NightColor } from "../model/color"
import { pSBC } from "../helpers/color/colorContrast"
import { colorDepends, DefaultColor, DefaultNightColor } from "../consts/color"

const initColor:ColorState = {
    ...DefaultColor,
    On_primary_color: getTextColor(DefaultColor.Primary_color),
    On_secondary_color: getTextColor(DefaultColor.Secondary_color),
    On_tertiary_color: getTextColor(DefaultColor.Tertiary_color),
    Primary_container_color: getContainerColor(DefaultColor.Primary_color),
    Secondary_container_color: getContainerColor(DefaultColor.Secondary_color),
    Tertiary_container_color: getContainerColor(DefaultColor.Tertiary_color),
    On_primary_container_color: getTextColor(getContainerColor(DefaultColor.Primary_color)),
    On_secondary_container_color: getTextColor(getContainerColor(DefaultColor.Secondary_color)),
    On_tertiary_container_color: getTextColor(getContainerColor(DefaultColor.Tertiary_color)),
    On_background_color: getTextColor(DefaultColor.Background_color),
    Outline_variant_color: pSBC(-0.1, DefaultColor.Outline_color)??DefaultColor.Outline_color,
    Surface_container_high_color: pSBC(0.1, DefaultColor.Surface_container_color)??DefaultColor.Surface_container_color,
    Surface_container_highest_color: pSBC(0.2, DefaultColor.Surface_container_color)??DefaultColor.Surface_container_color,
    Surface_container_low_color: pSBC(-0.1, DefaultColor.Surface_container_color)??DefaultColor.Surface_container_color,
    Surface_container_lowest_color: pSBC(-0.2, DefaultColor.Surface_container_color)??DefaultColor.Surface_container_color,
    On_surface_color: getTextColor(DefaultColor.Surface_container_color),
    On_error_color: getTextColor(DefaultColor.Error_color),
    Error_container_color: getContainerColor(DefaultColor.Error_color),
    On_error_container_color: getTextColor(getContainerColor(DefaultColor.Error_color)),
}

export const useColor = () => {

    const [colors, setVarColor] = useState<ColorState>(initColor)
    const [lightColor, setLightColor] = useState<BaseColor>(DefaultColor)
    const [nightColor, setNightColor] = useState<NightColor>(DefaultNightColor)
    const [nightMode, setStateNightMode] = useState<boolean>(false)


    const updateColor = (key: string, color?: string)=>{
        if(!color)return
        document.body.style.setProperty(getNameVarColor(key), color)
    }

    const _setColor = (key:string, newColor: string, night:boolean = false) => {
        setVarColor(prev=>({...prev, [key]:newColor}))
        updateColor(key, newColor)
        if(key in colorDepends)
        {
            const dependColor = colorDepends[key]
            dependColor.container?.forEach((depColor)=>_setColor(depColor, getContainerColor(newColor, night), night))
            dependColor.text?.forEach((depColor)=>_setColor(depColor, getTextColor(newColor), night))
            if(night)
            {
                dependColor.low?.forEach((depColor)=>_setColor(depColor, pSBC(-0.1, newColor)??newColor, night))
                dependColor.high?.forEach((depColor)=>_setColor(depColor, pSBC(0.1, newColor)??newColor, night))
            }
            else{
                dependColor.low?.forEach((depColor)=>_setColor(depColor, pSBC(0.1, newColor)??newColor, night))
                dependColor.high?.forEach((depColor)=>_setColor(depColor, pSBC(-0.1, newColor)??newColor, night))
            }
        }
    }

    const setColor = useCallback(async(newColors:ChangeColor)=>{
        for(let key in newColors)
        {
            const newColor = newColors[key as keyof ChangeColor]
            console.log("set color", key, newColor)
            const convertedKey = getKeyByColorVar(key)
            console.log("set color p7", key, convertedKey)
            if(convertedKey in DefaultColor || convertedKey in DefaultNightColor)
                key = convertedKey
            console.log("set color", key, newColor)
            if(!((key in DefaultColor) || (key in DefaultNightColor)) || !newColor)
                continue
            console.log("set color", key, newColor)
            if(key in DefaultColor)
            {
                if(nightColor[(key + "_night") as keyof NightColor] === lightColor[key as keyof BaseColor])
                    setNightColor(prev=>({...prev, [(key + "_night")]:newColor}))
                setLightColor(prev=>({...prev, [key]:newColor}))
            }
            else if(key in DefaultNightColor)
                setNightColor(prev=>({...prev, [key]:newColor}))
        }
    },[lightColor, nightColor])

    const reCalculateColor = useCallback((mode?:boolean) => {
        const baseColors:BaseColor = mode?mapNightColorToBaseColor(nightColor):lightColor
        console.log(baseColors)
        for(let key in baseColors)
        {
            _setColor(key, baseColors[key as keyof BaseColor], mode)
        }
    },[nightColor, lightColor])

    const setNightMode = useCallback((mode:boolean) => {
        setStateNightMode(mode)
    },[])

    useEffect(()=>{
        reCalculateColor(nightMode)
    },[nightMode, reCalculateColor])

    return{
        colors,
        setColor,
        nightMode,
        setNightMode,
        reCalculateColor,
        lightColor,
        nightColor
    }
}