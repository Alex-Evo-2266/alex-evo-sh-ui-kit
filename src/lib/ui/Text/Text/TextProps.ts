import { ScreenSize } from "../../../model/sizeScreen"

type PProps = React.HTMLAttributes<HTMLParagraphElement>
type HProps = React.HTMLAttributes<HTMLHeadingElement>

export interface TextProps extends PProps{
    screensize?: ScreenSize
}

export interface HeadingProps extends HProps{
    screensize?: ScreenSize
}

export interface TextOption{
    [ScreenSize.MOBILE]:string,
    [ScreenSize.STANDART]:string,
    [ScreenSize.BIG_SCREEN]:string,
}