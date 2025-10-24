import { NavLink } from "react-router-dom"
import '../style/navigation-item.scss'

interface NavigationbarItemProps{
	title?: string
	icon: React.ReactNode
	to: string
}

export const NavigationbarItem = ({icon, title, to}:NavigationbarItemProps) => {

	return(
		<NavLink to={to} className={`navigation-item navigation-item-bar`}>
			<div className='
			navigation-item-bar__icon 
			navigation-item-bar__icon_color_surface-variant 
			navigation-item-bar__icon_hover-color_surface-container-highest 
			navigation-item-bar__icon_color_active-secondary-container 
			'>{icon}</div>
			<div className='navigation-item-bar__text navigation-item-bar__text_color_surface-variant'>{title}</div>
		</NavLink>
	)
}