import { ScreenSize } from "../../../model/sizeScreen"
import { TemplateText } from "./TemplateText"
import { TextOption, TextProps } from "./TextProps"

const FountSize:TextOption = {
    [ScreenSize.MOBILE]:"var(--text-base-small-screen)",
    [ScreenSize.STANDART]:"var(--text-base-standart-screen)",
    [ScreenSize.BIG_SCREEN]:"var(--text-base-big-screen)",
}

export const BaseText = (props:TextProps) => TemplateText({...props, option:FountSize})
