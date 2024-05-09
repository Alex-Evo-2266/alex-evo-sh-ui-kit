import "./Divider.scss"

export interface DividerProps{
    short?: boolean
    text?: string
    style?: React.CSSProperties
}

export const Divider = ({style, short, text}:DividerProps) => {

    if(text)
        return(
            <div style={style} className={`divider-and-text ${short?"short":""}`}>
                <div className={`divider ${short?"short":""}`}></div>
                {text}
                <div className={`divider ${short?"short":""}`}></div>
            </div>
        )

    return(
        <div style={style} className={`divider ${short?"short":""}`}></div>
    )
}