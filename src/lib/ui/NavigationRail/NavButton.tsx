
interface NavButtonProps{
    icon: React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLDivElement>)=>void
    title?: string
	active?: boolean
}

export const NavButton = ({onClick, icon, title, active=false}:NavButtonProps) => {

    return(
		<div onClick={onClick} className={`navigation-item ${active?"active":""}`}>
			<div className='navigation-item-icon'>{icon}</div>
			<div className='navigation-item-text'>{title}</div>
		</div>
	)
}