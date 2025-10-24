import { useState } from "react"
import { NavButton } from "./NavButton"
import { NavigationDrawerItem } from "./NavigationDrawerItem"
import { NavigationButton } from "../../../model/navigation"
import { ChevronDown,  } from "../../Icons"

interface NavigationSubmenuProps {
	item: NavigationButton
	onHide?: () => void
}

export const NavigationSubmenu = ({ item, onHide }: NavigationSubmenuProps) => {
	if (item.type !== "submenu") return null
	const [open, setOpen] = useState(item.open ?? false)

	return (
		<div className={`navigation-submenu ${open ? "open" : ""}`}>
			<NavButton
				icon={
					<div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
						{item.icon}
						<ChevronDown className={open?"rotate-90":"rotate-0"}/>
					</div>
				}
				title={item.text}
				onClick={() => setOpen((prev) => !prev)}
			/>
			{open && (
				<div className="submenu-content">
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
