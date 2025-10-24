import {NavLink} from 'react-router-dom'
import '../style/navigation-item.scss'

interface NavigationDrawerItemProps{
	title: string
	icon: React.ReactNode
	to: string
	onClick?: ()=>void
}

export const NavigationDrawerItem = ({onClick, icon, title, to}:NavigationDrawerItemProps) => {

	return(
		<NavLink onClick={onClick} to={to} className={`
			navigation-item
			navigation-item-drawer 
			navigation-item-drawer_hover-color_surface-container-highest 
			navigation-item-drawer_color_active-secondary-container
			`}>
			<div className='
			navigation-item-drawer__icon 
			navigation-item-drawer__icon_color_surface-variant 
			'>{icon}</div>
			<div className='navigation-item-drawer__text navigation-item-drawer__text_color_surface-variant'>{title}</div>
		</NavLink>
	)
}