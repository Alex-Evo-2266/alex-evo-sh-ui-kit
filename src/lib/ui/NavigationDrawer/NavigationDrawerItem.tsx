
interface NavigationDrawerItemProps{
	title: string
	icon: React.ReactNode
	to: string
	onClick?: ()=>void
}

export const NavigationDrawerItem = ({onClick, icon, title, to}:NavigationDrawerItemProps) => {

	return(
		<a onClick={onClick} href={to} className={`navigation-item ${(window.location.pathname === to)?"active":""}`}>
			<div className='navigation-item-icon'>{icon}</div>
			<div className='navigation-item-text'>{title}</div>
		</a>
	)
}