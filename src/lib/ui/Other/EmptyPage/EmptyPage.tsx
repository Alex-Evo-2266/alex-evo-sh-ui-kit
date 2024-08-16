
import { getGlassColor } from '../../../helpers/colorConvert'
import { Button, styleType } from '../../Base/Button/Button'
import './EmptyPage.scss'

interface EmptyPageBtnProps {
    text: string
    onClick: ()=>void
    className?: string
    style?: React.CSSProperties 
    styleType?: styleType
}

export interface EmptyPageProps{
    title: string
    text?: string
    hexColor?: string
    hexBackground?: string
    style?: React.CSSProperties
    className?:string
    btn?: EmptyPageBtnProps
}

export const EmptyPage:React.FC<EmptyPageProps> = ({className, text, title, hexColor, hexBackground, style, btn}) => {

    return(
        <div className={`alex-evo-sh-ui-kit-empty-page ${className ?? ""}`} style={{background: getGlassColor(hexBackground), color: hexColor, ...style}}>
            <h2>{title}</h2>
            {
                (text)?
                <p>{text}</p>:
                null
            }
            {
                (btn)?
                <Button styleType={btn.styleType ?? "filled"} style={btn.style} className={btn.className} onClick={btn.onClick}>{btn.text}</Button>
                :null
            }
        </div>
    )
}