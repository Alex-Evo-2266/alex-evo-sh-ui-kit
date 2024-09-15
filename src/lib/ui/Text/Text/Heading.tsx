import { ScreenSize } from "../../../model/sizeScreen"
import { HeadingProps, TextOption } from "./TextProps"

const FountSizeHeading1:TextOption = {
    [ScreenSize.MOBILE]:"var(--heading-1-small-screen)",
    [ScreenSize.STANDART]:"var(--heading-1-standart-screen)",
    [ScreenSize.BIG_SCREEN]:"var(--heading-1-big-screen)"
}

const FountSizeHeading2:TextOption = {
    [ScreenSize.MOBILE]:"var(--heading-2-small-screen)",
    [ScreenSize.STANDART]:"var(--heading-2-standart-screen)",
    [ScreenSize.BIG_SCREEN]:"var(--heading-2-big-screen)"
}

const FountSizeHeading3:TextOption = {
    [ScreenSize.MOBILE]:"var(--heading-3-small-screen)",
    [ScreenSize.STANDART]:"var(--heading-3-standart-screen)",
    [ScreenSize.BIG_SCREEN]:"var(--heading-3-big-screen)"
}

const FountSizeHeading4:TextOption = {
    [ScreenSize.MOBILE]:"var(--heading-4-small-screen)",
    [ScreenSize.STANDART]:"var(--heading-4-standart-screen)",
    [ScreenSize.BIG_SCREEN]:"var(--heading-4-big-screen)"
}

export const H1 = (props:HeadingProps) => {

    return(<h1 {...{...props}} 
        style={{...props.style, fontSize:props.style?.fontSize ?? FountSizeHeading1[props.screensize ?? ScreenSize.STANDART]}} 
        className={`alex-evo-ui-kit alex-evo-ui-kit-heading ${props.className}`}
        />
    )
}

export const H2 = (props:HeadingProps) => {

    return(<h2 {...{...props}} 
        style={{...props.style, fontSize:props.style?.fontSize ?? FountSizeHeading2[props.screensize ?? ScreenSize.STANDART]}} 
        className={`alex-evo-ui-kit alex-evo-ui-kit-heading ${props.className}`}
        />
    )
}

export const H3 = (props:HeadingProps) => {

    return(<h3 {...{...props}} 
        style={{...props.style, fontSize:props.style?.fontSize ?? FountSizeHeading3[props.screensize ?? ScreenSize.STANDART]}} 
        className={`alex-evo-ui-kit alex-evo-ui-kit-heading ${props.className}`}
        />
    )
}

export const H4 = (props:HeadingProps) => {

    return(<h4 {...{...props}} 
        style={{...props.style, fontSize:props.style?.fontSize ?? FountSizeHeading4[props.screensize ?? ScreenSize.STANDART]}} 
        className={`alex-evo-ui-kit alex-evo-ui-kit-heading ${props.className}`}
        />
    )
}
