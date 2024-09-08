import { ScreenSize } from "../../../model/sizeScreen"
import { TemplateText } from "./TemplateText"
import { TextOption, TextProps } from "./TextProps"

const FountSize:TextOption = {
    [ScreenSize.MOBILE]:"var(--text-small-small-screen)",
    [ScreenSize.STANDART]:"var(--text-small-standart-screen)",
    [ScreenSize.BIG_SCREEN]:"var(--text-small-big-screen)",
}

export const SmallText = (props:TextProps) => TemplateText({...props, option:FountSize})
