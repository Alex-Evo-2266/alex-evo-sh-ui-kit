import React from "react"
import { MenuBlock } from "./MenuBlock"
import { Divider } from "../Other/Divider/Divider"
import { MenuButtomStateProps } from "../../model/menu"
import { BottomSheetsUi } from "../.."

export const SmallWindowMenu = (menu:MenuButtomStateProps) => {
	const foo = () => {}
    return(
			<BottomSheetsUi onHide={menu.onHide || foo} visible={menu.visible} bottom={menu.marginBottom}>
				<div className="bottom-sheets-menu-container">
					{
					menu.blocks.map((item, index)=>(
						<React.Fragment key={index}>
						{
							(index !== 0)?
							<Divider/>:
							null
						}
						<MenuBlock block={item} smallDisplay={true} autoHide={menu.autoHide} onHide={menu.onHide}/>
						</React.Fragment>
					))
					}
				</div>
			</BottomSheetsUi>
    )
}