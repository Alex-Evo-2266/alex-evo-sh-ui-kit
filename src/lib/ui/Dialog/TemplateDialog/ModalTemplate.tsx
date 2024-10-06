
export interface ModalTemplateProps{
    children: React.ReactNode
    onHide?: ()=>void
    disableBackplate?: boolean
}

export const ModalTemplate:React.FC<ModalTemplateProps> = ({children, onHide, disableBackplate}) => {

    function hide() {
        onHide && onHide()
    }

    return(
        <div className="modal-container" style={{zIndex:disableBackplate?"0":undefined}}>
            <div onClick={hide} style={{display:disableBackplate?"none":undefined}} className="backplate"></div>
            {children}
        </div>
    )
}