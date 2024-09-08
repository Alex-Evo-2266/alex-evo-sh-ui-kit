import { ScreenSize } from "../../../model/sizeScreen"
import { TemplateText } from "./TemplateText"
import { TextOption, TextProps } from "./TextProps"

const FountSize:TextOption = {
    [ScreenSize.MOBILE]:"12px",
    [ScreenSize.STANDART]:"12px",
    [ScreenSize.BIG_SCREEN]:"14px"
}

export const SmallText = (props:TextProps) => TemplateText({...props, option:FountSize})
