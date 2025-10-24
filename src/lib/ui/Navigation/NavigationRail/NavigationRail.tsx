import './style/navigation-rail.scss'
import { NavigationRailItem } from './NavigationRailItem'
import { NavButton } from './NavButton'
import { Divider } from "../../Other/Divider/Divider"
import { NavigationBtn, NavigationButton } from '../../../model/navigation'
import { MenuIcon, MoreHorizontal } from '../../Icons'

export interface NavigationRailProps{
	firstBtn?: NavigationBtn
	mainBtn?: NavigationButton[]
	backBtn?: NavigationBtn
    onToggleMenu?: ()=>void
}

export const NavigationRail = ({onToggleMenu, firstBtn, mainBtn, backBtn}:NavigationRailProps) => {

    return(
        <div className={`navigation-rail`}>
            <div className='navigation-rail__block'>
                <div className='navigation-rail__block__content'>
                    {
                        (onToggleMenu)?
                        <NavButton icon={<MenuIcon className='navigation-rail__block__content__icon navigation-rail__block__content__icon_color_surface-variant'/>} onClick={onToggleMenu}/>:
                        null
                    }
                    {
                        (firstBtn)?
                        <>
                            <Divider/>
                            <NavButton active={firstBtn.active} title={firstBtn.text} icon={firstBtn.icon ?? <MoreHorizontal/>} onClick={(e)=>{firstBtn.onClick && firstBtn.onClick(e)}}/>
                            <Divider/>
                        </>:
                        null
                    }
                    {
                        mainBtn && mainBtn.map((item, index)=>(
                            (item.type === "button")?
                            <NavButton active={item.active} onClick={item.onClick} key={index} title={item.text} icon={item.icon}/>:
                            (item.type === "link")?
                            <NavigationRailItem key={index} title={item.text} icon={item.icon} to={item.to}/>:
                            null
                        ))
                    }
                    {
                        (backBtn)?
                        <>
                            <Divider/>
                            <NavButton active={backBtn.active} title={backBtn.text} icon={backBtn.icon ?? <MoreHorizontal/>} onClick={(e)=>{backBtn.onClick && backBtn.onClick(e)}}/>
                            <Divider/>
                        </>:
                        null
                    }
                </div>
            </div>
        </div>
    )
}