import '../style/navigation-item.scss'

interface NavButtonProps{
    icon: React.ReactNode
	onClick?: (event: React.MouseEvent<HTMLDivElement>)=>void
    title?: string
}

export const NavButton = ({onClick, icon, title}:NavButtonProps) => {

    return(
		<div onClick={onClick} className='navigation-item navigation-item-bar'>
			<div className='
			navigation-item-bar__icon 
			navigation-item-bar__icon_color_surface-variant 
			navigation-item-bar__icon_hover-color_surface-container-highest 
			navigation-item-bar__icon_color_active-secondary-container
			'>{icon}</div>
			<div className='navigation-item-bar__text navigation-item-bar__text_color_surface-variant'>{title}</div>
		</div>
	)
}