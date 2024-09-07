
import './ColorBlock.scss'

interface IColorBlock{
    baseColorTitle: string
    baseColor: string
    textColorTitle?: string
    textColor: string
}

export const ColorBlock:React.FC<IColorBlock> = ({baseColorTitle, baseColor, textColor, textColorTitle}) => {

    return(
        <div className="alex-evo-ui-kit-color-block">
            <div className="alex-evo-ui-kit-color-block-base" style={{backgroundColor:baseColor}}>
                <h5 style={{color:textColor}}>{baseColorTitle}</h5>
            </div>
            {
                (textColorTitle)?
                <div className="alex-evo-ui-kit-color-block-text" style={{backgroundColor:textColor}}>
                    <h5 style={{color:baseColor}}>{textColorTitle}</h5>
                </div>:
                null
            }
        </div>
    )
}