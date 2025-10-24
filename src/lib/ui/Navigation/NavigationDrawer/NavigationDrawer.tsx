import './NavigationDrawer.scss'
import { Divider } from "../../Other/Divider/Divider"
import { NavigationDrawerItem } from './NavigationDrawerItem'
import { NavButton } from './NavButton'
import { NavigationBtn, NavigationButton } from '../../../model/navigation'
import { MoreHorizontal } from '../../Icons'
import { NavigationSubmenu } from './NavSub'

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
		<div className={`navigation-drawer-container ${(visible || openAlways)?"show":"hide"}`}>
			{
				(firstBtn)?
				<>
					<div className='navigation-block'>
						<div className='block-header'></div>
						<div className='block-content'>
							<NavButton active={firstBtn.active} onClick={firstBtn.onClick} title={firstBtn.text} icon={firstBtn.icon ?? <MoreHorizontal/>}/>
						</div>
					</div>
					<div className='divider-container'>
						<Divider/>
					</div>
				</>:
				null
			}
			<div className='navigation-block'>
				<div className='block-header'></div>
				<div className='block-content'>
				{
					mainBtn && mainBtn.map(renderButton)
				}
				</div>
			</div>
			<div className='divider-container'>
				<Divider/>
			</div>
			<div className='navigation-block'>
				<div className='block-header'></div>
				<div className='block-content'>
				{
					otherBtn && otherBtn.map(renderButton)
				}
				</div>
			</div>
			<div className='divider-container'>
				<Divider/>
			</div>
			{
				(backBtn)?
				<div className='navigation-block'>
					<NavButton active={backBtn.active} onClick={backBtn.onClick} title={backBtn.text} icon={backBtn.icon}/>
				</div>:null
			}
		</div>
		{
			(visible && !openAlways)?
			<div className="backplate" style={{zIndex:1100}} onClick={()=>onHide()}></div>:
			null
		}
		</>
		
	)
}