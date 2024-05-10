
interface NavigationbarItemProps{
	title?: string
	icon: React.ReactNode
	to: string
}

export const NavigationbarItem = ({icon, title, to}:NavigationbarItemProps) => {

	return(
		<a href={to} className={`navigation-item ${(window.location.pathname === to)?"active":""}`}>
			<div className='navigation-item-icon'>{icon}</div>
			<div className='navigation-item-text'>{title}</div>
		</a>
	)
}