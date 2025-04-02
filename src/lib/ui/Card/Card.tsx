import { useScreenSize } from "../../hooks/screenSize.hook"
import { ScreenSize } from "../../model/sizeScreen"
import { Typography } from "../Text/Text/Typography"
import "./Card.scss"

export interface CardProps{
	className?: string
	action?: React.ReactNode
	imgSrc?: string
	alt?: string
	header?: string
	subhead?: string
	text?: string
	children?: React.ReactNode
	iconButtonCell?: React.ReactNode
	onClick?: (e:React.MouseEvent<HTMLDivElement>)=>void
	screenSize?: ScreenSize
	style?: React.CSSProperties
}

export const Card = ({style, className, action, imgSrc, alt, header, subhead, text, children, iconButtonCell, onClick, screenSize: screenProps}:CardProps) => {
	
	const isCard = (e:React.MouseEvent<HTMLDivElement>):boolean=>{
		if((e.target as Element).className === "action-container" || (e.target as Element).closest(".action-container"))
			return false
		if((e.target as Element).className === "icon-button-container" || (e.target as Element).closest(".icon-button-container"))
			return false
		if((e.target as Element).className === "card-child-container" || (e.target as Element).closest(".card-child-container"))
			return false
		return true
	}

	const {screen} = useScreenSize()

	const screenSize = screenProps ?? screen
	
	const click = (e:React.MouseEvent<HTMLDivElement>) => {
		if(!isCard(e))
			return
        onClick && onClick(e)
		let rootContainer = e.currentTarget.closest(".card-container")
		let clickContainer = rootContainer?.querySelector(".blick-container")
		if(!clickContainer)
			return
        let overlay = document.createElement('span')
        overlay.classList.add("btn-overlay")
		const containerRect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - containerRect.left;
    	const y = e.clientY - containerRect.top;
        overlay.style.left = x + "px"
        overlay.style.top = y + "px"
		clickContainer.appendChild(overlay)

        setTimeout(()=>{
            overlay.remove()
        },500)
    }

	return(
		<div style={style} className={`card-container ${className}`} onClick={click}>
			<div className="blick-container"></div>
			{
				(imgSrc)?
				<div className="card-img-container">
					<img src={imgSrc} alt={alt}/>
				</div>:null
			}
			<div className="card-content-container">
				<div className="card-Headline-container mb-1 font-bold">
					<div className="headline">
						<Typography type='title' weight='bold' screensize={screenSize} className="card-heading">{header}</Typography>
					</div>
					{
						(iconButtonCell)?
						<div className="icon-button-container">
						{iconButtonCell}
						</div>:null
					}
				</div>
				{
					(subhead)?
					<div className="card-subhead-container mb-1">
						<div className="subhead">
							<Typography style={{display: "block"}} type='title-2' weight='bold' screensize={screenSize} className="card-subhead">{subhead}</Typography>
						</div>
					</div>:null
				}
				{
					(text)?
					<div className="card-text-container mb-1">
						<div className="text">
							<Typography type='body' screensize={screenSize} className="">{text}</Typography>
						</div>
					</div>:null
				}
				{
					(children)?
					<div className="card-child-container mb-2">
					{children}
					</div>:null
				}
				<div className="action-container">{action}</div>
			</div>
		</div>
	)
}