import { Divider } from "../../Other/Divider/Divider"
import { NavigationDrawerItem } from './NavigationDrawerItem'
import { NavButton } from './NavButton'
import { NavigationBtn, NavigationButton } from '../../../model/navigation'
import { MoreHorizontal } from '../../Icons'
import { NavigationSubmenu } from './NavSub'
import './style/navigation-drawer.scss'

export interface NavigationDrawerProps{
	visible?: boolean
	openAlways?: boolean
	onHide: ()=>void
	firstBtn?: NavigationBtn
	mainBtn?: NavigationButton[]
	otherBtn?: NavigationButton[]
	backBtn?: NavigationBtn
}

export const NavigationDrawer = ({visible, firstBtn, mainBtn, onHide, otherBtn, backBtn, openAlways}:NavigationDrawerProps) => {

	const renderButton = (item: NavigationButton, index: number) => {
		if (item.type === "button")
			return <NavButton key={index} active={item.active} onClick={item.onClick} title={item.text} icon={item.icon} />
		if (item.type === "link")
			return <NavigationDrawerItem key={index} onClick={() => onHide()} title={item.text} icon={item.icon} to={item.to} />
		if (item.type === "submenu")
			return <NavigationSubmenu key={index} item={item} onHide={onHide} />
		return null
	}

	return(
		<>
		<div className={`navigation-drawer ${(visible || openAlways)?"navigation-drawer_show":"navigation-drawer_hide"}`}>
			{
				(firstBtn)?
				<>
					<div className='navigation-drawer__block'>
						<div className='navigation-drawer__block__header'></div>
						<div className='navigation-drawer__block__content'>
							<NavButton active={firstBtn.active} onClick={firstBtn.onClick} title={firstBtn.text} icon={firstBtn.icon ?? <MoreHorizontal/>}/>
						</div>
					</div>
					<div className='navigation-drawer__divider'>
						<Divider/>
					</div>
				</>:
				null
			}
			<div className='navigation-drawer__block'>
				<div className='navigation-drawer__block__header'></div>
				<div className='navigation-drawer__block__content'>
				{
					mainBtn && mainBtn.map(renderButton)
				}
				</div>
			</div>
			<div className='navigation-drawer__divider'>
				<Divider/>
			</div>
			<div className='navigation-drawer__block'>
				<div className='navigation-drawer__block__header'></div>
				<div className='navigation-drawer__block__content'>
				{
					otherBtn && otherBtn.map(renderButton)
				}
				</div>
			</div>
			<div className='navigation-drawer__divider'>
				<Divider/>
			</div>
			{
				(backBtn)?
				<div className='navigation-drawer__block'>
					<NavButton active={backBtn.active} onClick={backBtn.onClick} title={backBtn.text} icon={backBtn.icon}/>
				</div>:null
			}
		</div>
		{
			(visible && !openAlways)?
			<div className="navigation-drawer-backplate" style={{zIndex:1100}} onClick={()=>onHide()}></div>:
			null
		}
		</>
		
	)
}