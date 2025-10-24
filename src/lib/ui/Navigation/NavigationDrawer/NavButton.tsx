import '../style/navigation-item.scss'

interface NavButtonProps{
    icon: React.ReactNode
	onClick?: (event: React.MouseEvent<HTMLDivElement>)=>void
    title?: string
	active?: boolean
}

export const NavButton = ({onClick, icon, title, active=false}:NavButtonProps) => {

	return(
		<div onClick={onClick} className={`
			navigation-item
			navigation-item-drawer 
			navigation-item-drawer_hover-color_surface-container-highest 
			navigation-item-drawer_color_active-secondary-container 
			${active?"active":""}
			`}>
			<div className='
			navigation-item-drawer__icon 
			navigation-item-drawer__icon_color_surface-variant 
			'>{icon}</div>
			<div className='navigation-item-drawer__text navigation-item-drawer__text_color_surface-variant'>{title}</div>
		</div>
	)
}