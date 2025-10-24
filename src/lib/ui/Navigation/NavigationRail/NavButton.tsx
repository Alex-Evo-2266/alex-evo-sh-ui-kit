
interface NavButtonProps{
    icon: React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLDivElement>)=>void
    title?: string
	active?: boolean
}

export const NavButton = ({onClick, icon, title, active=false}:NavButtonProps) => {

    return(
		<div onClick={onClick} className={`navigation-item navigation-item-rail ${active?"active":""}`}>
			<div className='
			navigation-item-rail__icon 
			navigation-item-rail__icon_color_surface-variant 
			navigation-item-rail__icon_hover-color_surface-container-highest 
			navigation-item-rail__icon_color_active-secondary-container
			'>{icon}</div>
			<div className='navigation-item-rail__text navigation-item-rail__text_color_surface-variant'>{title}</div>
		</div>
	)
}