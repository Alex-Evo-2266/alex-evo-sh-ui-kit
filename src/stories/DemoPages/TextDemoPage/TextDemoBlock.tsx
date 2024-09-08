import { H2 } from '../../../lib/ui/Text/Text/Heading'
import './TextDemoBlock.scss'

interface ITextDemoBlock{
    children?: React.ReactNode
    label?: string
}

export const TextDemoBlock:React.FC<ITextDemoBlock> = ({children, label}) => {

    return(
        <div className="text-demo-block">
            <div className="text-demo-block-label"><H2>{label}</H2></div>
            <div className="text-demo-block-content">{children}</div>
        </div>
    )
}