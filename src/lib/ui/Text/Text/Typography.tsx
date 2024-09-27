import { ScreenSize } from "../../../model/sizeScreen"
import { HeadingProps, TextOption, TextProps } from "./TextProps"
import './Text.scss'

type TypographyTypeHeader = "title" | "title-2" | "heading"

type TypographyTypeBase = "body" | "small"

type TypographyWeight = "thin" | "standart" | "bold"

type TypographyDensity = "tight" | "normal" | "loose"

interface ITypographyBase extends TextProps{
    type: TypographyTypeBase
    weight?: TypographyWeight
    density?: TypographyDensity
    children?: React.ReactNode
}

interface ITypographyHeader extends HeadingProps{
    type: TypographyTypeHeader
    weight?: TypographyWeight
    density?: TypographyDensity
    children?: React.ReactNode
}

type ITypography = ITypographyBase | ITypographyHeader

const FountSize:TextOption = {
    [ScreenSize.MOBILE]:"small-screen",
    [ScreenSize.STANDART]:"standart-screen",
    [ScreenSize.BIG_SCREEN]:"big-screen",
}

function getFontVar(type: TypographyTypeHeader | TypographyTypeBase, screenSize: ScreenSize = ScreenSize.STANDART){
    return `var(--${type}-${FountSize[screenSize]})`
}

function getWeightVar(type: TypographyTypeHeader | TypographyTypeBase, weight: TypographyWeight = 'standart'){
    return `var(--${type}-${weight})`
}
    
function getLineHeightVar(type: TypographyTypeHeader | TypographyTypeBase, density: TypographyDensity = 'normal', screenSize: ScreenSize = ScreenSize.STANDART){
    return `var(--${type}-heights-${FountSize[screenSize]}-${density})`
}

export const Typography = (props:ITypography) => {
    if(props.type === "heading" || props.type === "title")
        return(
            <h3 {...{...props}} 
            style={{
                ...props.style, 
                fontSize:props.style?.fontSize ?? getFontVar(props.type, props.screensize),
                fontWeight: props.style?.fontWeight ?? getWeightVar(props.type, props.weight),
                lineHeight: props.style?.lineHeight ?? getLineHeightVar(props.type, props.density, props.screensize)
            }} 
            className={`alex-evo-ui-kit alex-evo-ui-kit-heading ${props.className}`}
            />
        )
    return(<span {...{...props}} 
        style={{
            ...props.style, 
            fontSize:props.style?.fontSize ?? getFontVar(props.type, props.screensize),
            fontWeight: props.style?.fontWeight ?? getWeightVar(props.type, props.weight),
            lineHeight: props.style?.lineHeight ?? getLineHeightVar(props.type, props.density, props.screensize)
        }} 
        className={`alex-evo-ui-kit alex-evo-ui-kit-text ${props.className}`}
        />
    )
}