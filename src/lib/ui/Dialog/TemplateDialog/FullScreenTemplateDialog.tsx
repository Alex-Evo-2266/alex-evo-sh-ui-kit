import { useCallback, useEffect, useState } from "react"
import { IconButton } from "../../Base/IconButton/IconButton"
import "./Dialog.scss"
import { ModalTemplateDialog } from "./BasicTemplateDialog"
import { TextButton } from "../../Base/Button/Button"
import { X } from "../../Icons"
import { useScrollLock } from "../../../hooks/lockScroll.hook"

export interface DialogProps{
	children: React.ReactNode
	header?: string
	onSave?: (data?:any)=>void
    onHide?: ()=>void
    className?: string
	style?: React.CSSProperties
	marginBottom?: number
    disableBackplate?: boolean
}

interface ButtonDialogProps{
	onSave?: (data?:any)=>void
    onHide?: ()=>void
}

const ButtonDialog = ({onHide, onSave}:ButtonDialogProps) => (
	<div className="dialog-button-container">
		{(onHide)?<TextButton onClick={onHide}>cancel</TextButton>:null}
		{(onSave)?<TextButton onClick={onSave}>save</TextButton>:null}
	</div>
)

export const FullScrinTemplateDialog = ({style, className, header, children, onSave, onHide, marginBottom, disableBackplate}:DialogProps) => {

	const [fullScreenDisplay, setFullScreenDisplay] = useState<boolean>(false)
    useScrollLock(true, document.body)

    const resize = useCallback(() => {
        if(window.innerWidth < 720)
            setFullScreenDisplay(true)
        else
            setFullScreenDisplay(false)
    },[window.innerWidth])

    useEffect(()=>{
        resize()
    },[resize])

    useEffect(()=>{
		window.addEventListener('resize', resize)
		return ()=>{
			window.removeEventListener('resize', resize)
		}
	},[resize])

	const hide = ()=>{
		onHide && onHide()
	}

	const save = () => {
		onSave && onSave()
	}
	
	if(!fullScreenDisplay)
		return(
			<ModalTemplateDialog disableBackplate={disableBackplate} style={style} header={header} className={`full-screen-dialog-base-format ${className}`} onHide={hide} children={children} action={<ButtonDialog onHide={onHide? hide: undefined} onSave={onSave?save:undefined}/>}/>
		)

	return(
		<div style={{...style, height:`calc(100vh - ${marginBottom}px`}} className={`full-screen-dialog-container ${className}`}>
			<div className="full-screen-dialog-header">
				<div className="dialog-icon-container">
					{onHide && <IconButton transparent onClick={hide} icon={<X/>}/>}
				</div>
				<div className="header">{header}</div>
				<div className="save-container">{onSave?<TextButton onClick={save}>save</TextButton>:null}</div>
			</div>
			<div className="full-screen-dialog-content" style={{overflowY:"auto"}}>
				{children}
			</div>
		</div>
	)
}