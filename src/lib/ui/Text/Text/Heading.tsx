import { ScreenSize } from "../../../model/sizeScreen"
import { HeadingProps, TextOption } from "./TextProps"

const FountSizeHeading1:TextOption = {
    [ScreenSize.MOBILE]:"32px",
    [ScreenSize.STANDART]:"32px",
    [ScreenSize.BIG_SCREEN]:"38px"
}

const FountSizeHeading2:TextOption = {
    [ScreenSize.MOBILE]:"24px",
    [ScreenSize.STANDART]:"28px",
    [ScreenSize.BIG_SCREEN]:"32px"
}

const FountSizeHeading3:TextOption = {
    [ScreenSize.MOBILE]:"20px",
    [ScreenSize.STANDART]:"22px",
    [ScreenSize.BIG_SCREEN]:"28px"
}

const FountSizeHeading4:TextOption = {
    [ScreenSize.MOBILE]:"18px",
    [ScreenSize.STANDART]:"20px",
    [ScreenSize.BIG_SCREEN]:"24px"
}

export const H1 = (props:HeadingProps) => {

    return(<h1 {...{...props}} 
        style={{...props.style, fontSize:FountSizeHeading1[props.screenSize ?? ScreenSize.STANDART]}} 
        className={`alex-evo-ui-kit alex-evo-ui-kit-heading ${props.className}`}
        />
    )
}

export const H2 = (props:HeadingProps) => {

    return(<h2 {...{...props}} 
        style={{...props.style, fontSize:FountSizeHeading2[props.screenSize ?? ScreenSize.STANDART]}} 
        className={`alex-evo-ui-kit alex-evo-ui-kit-heading ${props.className}`}
        />
    )
}

export const H3 = (props:HeadingProps) => {

    return(<h3 {...{...props}} 
        style={{...props.style, fontSize:FountSizeHeading3[props.screenSize ?? ScreenSize.STANDART]}} 
        className={`alex-evo-ui-kit alex-evo-ui-kit-heading ${props.className}`}
        />
    )
}

export const H4 = (props:HeadingProps) => {

    return(<h4 {...{...props}} 
        style={{...props.style, fontSize:FountSizeHeading4[props.screenSize ?? ScreenSize.STANDART]}} 
        className={`alex-evo-ui-kit alex-evo-ui-kit-heading ${props.className}`}
        />
    )
}
