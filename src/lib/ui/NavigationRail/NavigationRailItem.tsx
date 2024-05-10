
interface NavigationRailItemProps{
	title: string
	icon: React.ReactNode
	to: string
}

export const NavigationRailItem = ({icon, title, to}:NavigationRailItemProps) => {

	return(
		<a href={to} className={`navigation-item ${(window.location.pathname === to)?"active":""}`}>

			<div className='navigation-item-icon'>{icon}</div>
			<div className='navigation-item-text'>{title}</div>
		</a>
	)
}