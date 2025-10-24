import { useState } from "react"
import { NavButton } from "./NavButton"
import { NavigationDrawerItem } from "./NavigationDrawerItem"
import { NavigationButton } from "../../../model/navigation"
import { ChevronDown,  } from "../../Icons"
import '../style/navigation-item.scss'
import './style/navigation-sub-menu.scss'

interface NavigationSubmenuProps {
	item: NavigationButton
	onHide?: () => void
}

export const NavigationSubmenu = ({ item, onHide }: NavigationSubmenuProps) => {
	if (item.type !== "submenu") return null
	const [open, setOpen] = useState(item.open ?? false)

	return (
		<div className={`navigation-sub-menu ${open ? "navigation-sub-menu__open" : ""}`}>
			<NavButton
				icon={
					<div className="navigation-sub-menu__icon">
						{item.icon}
						<ChevronDown className={`
							navigation-sub-menu__icon__chevron 
							${open?
							"navigation-sub-menu__icon__chevron_rotate_90":
							"navigation-sub-menu__icon__chevron_rotate_0"
							}`}/>
					</div>
				}
				title={item.text}
				onClick={() => setOpen((prev) => !prev)}
			/>
			{open && (
				<div className="navigation-sub-menu__content">
					{item.children.map((child, index) =>
						child.type === "button" ? (
							<NavButton
								key={index}
								active={child.active}
								onClick={child.onClick}
								title={child.text}
								icon={child.icon}
							/>
						) : child.type === "link" ? (
							<NavigationDrawerItem
								key={index}
								onClick={onHide}
								title={child.text}
								icon={child.icon}
								to={child.to}
							/>
						) : null
					)}
				</div>
			)}
		</div>
	)
}
