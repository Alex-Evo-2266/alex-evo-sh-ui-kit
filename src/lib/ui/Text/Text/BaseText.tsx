import { ScreenSize } from "../../../model/sizeScreen"
import { TemplateText } from "./TemplateText"
import { TextOption, TextProps } from "./TextProps"

const FountSize:TextOption = {
    [ScreenSize.MOBILE]:"18px",
    [ScreenSize.STANDART]:"18px",
    [ScreenSize.BIG_SCREEN]:"20px"
}

export const BaseText = (props:TextProps) => TemplateText({...props, option:FountSize})
