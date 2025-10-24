import './style/navigation-bar.scss'
import { NavigationbarItem } from './NavigationBarItem'
import { NavButton } from './NavButton'
import { NavigationButton } from '../../../model/navigation'

export interface NavigationBarProps{
	btns:NavigationButton[]
}

export const NavigationBar = ({btns}:NavigationBarProps) => {

	return(
		<div className={`navigation-bar`}>
			<div className='navigation-bar__content'>
				{
					btns.map((item, index)=>(
						(item.type === "button")?
						<NavButton key={index} icon={item.icon} onClick={item.onClick} title={item.text}/>:
						(item.type === "link")?
						<NavigationbarItem key={index} icon={item.icon} to={item.to} title={item.text}/>:
						null
					))
				}
			</div>
		</div>
	)
}