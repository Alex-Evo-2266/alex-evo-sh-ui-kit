import { X } from 'lucide-react'
import './Chips.scss'
import { BaseText } from '../../Text/Text/BaseText'
import { ScreenSize } from '../../../model/sizeScreen'

export interface ChipsProps{
    text: string
    onClick?: (e:React.MouseEvent<HTMLDivElement>)=>void
    onDelete?: ()=>void
    big?: boolean
    screenSize?:ScreenSize
}

export const Chips = ({text, onDelete, big, onClick, screenSize}:ChipsProps) => {

    const isChips = (e:React.MouseEvent<HTMLDivElement>):boolean=>{
		if((e.target as Element).className === "alex-evo-ui-kit-chips-btn" || (e.target as Element).closest(".alex-evo-ui-kit-chips-btn"))
			return false
		return true
	}

    const click = (e:React.MouseEvent<HTMLDivElement>) => {
		if(!isChips(e))
			return
        onClick && onClick(e)
    }

    return(
        <div className={`alex-evo-ui-kit-chips chips ${big?"big-chips":""} ${onClick?"hovered":""}`} onClick={click}>
            <BaseText screensize={screenSize}>{text}</BaseText>
            {
                (onDelete)?
                <div className='alex-evo-ui-kit-chips-btn chips-btn' onClick={onDelete}><X size={18}/></div>:
                null
            }
        </div>
    )
}