import { ScreenSize } from "../../../model/sizeScreen"
import { HeadingProps, TextOption, TextProps } from "./TextProps"
import './Text.scss'

interface TemplateTextProps extends TextProps{
    option: TextOption
}

export const TemplateText = (props:TemplateTextProps) => {

    return(<p {...{...props}} 
        style={{...props.style, fontSize:props.option[props.screenSize ?? ScreenSize.STANDART]}} 
        className={`alex-evo-ui-kit alex-evo-ui-kit-text ${props.className}`}
        />
    )
}

interface TemplateHeadingProps extends HeadingProps{
    option: TextOption
}

export const TemplateHeading = (props:TemplateHeadingProps) => {

    return(<h2 {...{...props}} 
        style={{...props.style, fontSize:props.option[props.screenSize ?? ScreenSize.STANDART]}} 
        className={`alex-evo-ui-kit alex-evo-ui-kit-heading ${props.className}`}
        />
    )
}
