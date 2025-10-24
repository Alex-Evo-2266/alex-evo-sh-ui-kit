import {NavLink} from 'react-router-dom'
 
interface NavigationRailItemProps{
	title: string
	icon: React.ReactNode
	to: string
}

export const NavigationRailItem = ({icon, title, to}:NavigationRailItemProps) => {
	return(
		<NavLink to={to} className={`navigation-item navigation-item-rail`}>
			<div className='
			navigation-item-rail__icon 
			navigation-item-rail__icon_color_surface-variant 
			navigation-item-rail__icon_hover-color_surface-container-highest 
			navigation-item-rail__icon_color_active-secondary-container 
			'>{icon}</div>
			<div className='navigation-item-rail__text navigation-item-rail__text_color_surface-variant'>{title}</div>
		</NavLink>
	)
}