import React, { useEffect, useRef, useState } from "react"
import { Divider } from "../Divider/Divider"
import "./Menu.scss"
import { MenuBlock } from "./MenuBlock"
import { getModalWindowCord } from "../../helpers/getModalCord"
import { MenuStateProps } from "../../model/menu"

const MENU_MARGIN_BOTTOM = 100

interface ICord{
	left: string
	top: string
}

export const Menu = (menu:MenuStateProps) => {

	const container = useRef<HTMLDivElement>(null)
	const [cord, setCord] = useState<ICord>({left:"0px", top:"0px"})

	const hide = () => {
		menu.onHide && menu.onHide()
	}

	useEffect(()=>{
		let data = getModalWindowCord(menu.x, menu.y, container.current, {marginBottom: MENU_MARGIN_BOTTOM})
		setCord({
			left: data.x + "px", 
			top: data.y + "px",
		})
	},[menu.x, menu.y])

	if(!menu.visible)
		return null

	return(
		<>
		<div ref={container} className="menu-container" style={{...cord, opacity:(cord.top !== "0px")?"100%":"0%", width:menu.width, maxWidth:(menu.width)?"100%":undefined}}>
		{
			menu.blocks.map((item, index)=>(
				<React.Fragment key={index}>
				{
					(index !== 0)?
					<Divider/>:
					null
				}
				<MenuBlock block={item} smallDisplay={false} globalClick={menu.onClick} autoHide={menu.autoHide} onHide={hide}/>
				</React.Fragment>
			))
		}
		</div>
		<div style={{zIndex: 1600}} className="backplate" onClick={hide} onContextMenu={e=>{e.preventDefault()}}></div>
		</>
	)
}

