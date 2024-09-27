import { Typography } from '../../../lib'
import './TextDemoBlock.scss'

interface ITextDemoBlock{
    children?: React.ReactNode
    label?: string
}

export const TextDemoBlock:React.FC<ITextDemoBlock> = ({children, label}) => {

    return(
        <div className="text-demo-block">
            <div className="text-demo-block-label"><Typography type='title'>{label}</Typography></div>
            <div className="text-demo-block-content">{children}</div>
        </div>
    )
}